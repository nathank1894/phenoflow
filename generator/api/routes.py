from starlette.applications import Starlette
from starlette.responses import JSONResponse
from api import workflow
import yaml

app = Starlette(debug=True)

@app.route('/generate', methods=["POST"])
async def generate(request):
    generatedWorkflow = workflow.initWorkflow();
    generatedWorkflowInputs = {};
    generatedWorkflowInputs["potentialCases"] = {'class':'File', 'path':''};
    generatedSteps = [];

    try:
        steps = await request.json();
    except:
        steps = None;

    if ( steps ):
        for step in steps:
            # Send extension of last step output to signify workflow output
            extension = None;
            language = step['implementation']['language'];

            if ( step == steps[len(steps) - 1] ): extension = step['outputs'][0]['extension'];

            generatedWorkflow = workflow.createWorkflowStep(generatedWorkflow, step['position'], step['stepId'], language, extension);
            generatedWorkflowInputs["inputModule" + str(step['position'])] = {'class':'File', 'path':language + "/" + step['implementation']['fileName']};

            # For now, we only assume one variable input to each step, the potential cases; and one variable output, the filtered potential cases.
            if ( language == "python" ):
                generatedStep = workflow.createPythonStep(step['stepId'], step['type'], step['doc'], step['inputs'][0]['doc'], step['outputs'][0]['extension'], step['outputs'][0]['doc']).export_string()
            elif ( language == "knime" ):
                generatedStep = workflow.createKNIMEStep(step['stepId'], step['type'], step['doc'], step['inputs'][0]['doc'], step['outputs'][0]['extension'], step['outputs'][0]['doc']).export_string();
            else:
                # Handle unknown language
                generatedStep = "";

            generatedSteps.append({"stepId": step['stepId'], "content": generatedStep, "fileName": step['implementation']['fileName']});
    return JSONResponse({"workflow": generatedWorkflow.export_string(), "steps": generatedSteps, "workflowInputs": yaml.dump(generatedWorkflowInputs, default_flow_style=False)})

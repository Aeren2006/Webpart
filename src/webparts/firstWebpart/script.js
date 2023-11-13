const actionFocusOptions = {
  create: ["concept", "design", "solution", "communications and marketing campaign", "project plan"],
  explain: ["principles", "mechanism", "process"],
  analyze: ["performance", "effectiveness", "feasibility"],
  compare: ["methods", "techniques", "strategies"],
  evaluate: ["benefits", "limitations", "implications"],
  predict: ["trends", "developments", "impact"],
  recommend: ["approach", "solution", "strategy"],
  debate: ["pros and cons", "arguments", "viewpoints"],
  write: ["essay", "report", "summary", "email", "magazine article", "news website article", "learning module outline", "learning module description"]
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("action").addEventListener("change", () => {
    const action = document.getElementById("action").value;
    const focusOptions = actionFocusOptions[action];
    const focusSelect = document.getElementById("focus");
    focusSelect.innerHTML = "";

    for (const option of focusOptions) {
      const newOption = document.createElement("option");
      newOption.value = option;
      newOption.textContent = option;
      focusSelect.appendChild(newOption);
    }
  });

  document.getElementById("generate").addEventListener("click", () => {
    const author = document.getElementById("author").value;
    const department = document.getElementById("department").value;  // Corrected line
    const audience = document.getElementById("audience").value; 
    const agerange = document.getElementById("agerange").value;
    const tone = document.getElementById("tone").value;  
    const wordcount = document.getElementById("wordcount").value;    
    const action = document.getElementById("action").value;
    const focus = document.getElementById("focus").value;
    const subject = document.getElementById("subject").value;
    const context = document.getElementById("context").value;

    if (subject) {
      let systemPrompt = `You are a ${author} working for ${department}. You need to provide information to ${audience} in a ${tone} tone and should be ${wordcount} words long. The age range of the audience is ${agerange} years old. The action "${action}" has a focus on "${focus}".`;

      let mainPrompt = "";

      if (action === "create") {
        mainPrompt = `Design a ${subject} that focuses on ${focus} and addresses ${context}. Outline the key components of your solution, the logic behind your choices, and any possible alternatives. Additionally, discuss potential improvements and limitations of your design.`;
      } else if (action === "explain") {
        mainPrompt = `Provide a detailed explanation of a ${subject} with a focus on ${focus} that addresses ${context}. Highlight the underlying principles, how it works, and any common misconceptions. Also, discuss any challenges or complexities related to this subject.`;
      } else if (action === "analyze") {
        mainPrompt = `Perform a thorough analysis of a ${subject} with a focus on ${focus} in the context of ${context}. Discuss its strengths, weaknesses, and any potential improvements. Consider any factors that may influence its effectiveness or applicability.`;
      } else if (action === "compare") {
        mainPrompt = `Compare and contrast different approaches to ${subject} with a focus on ${focus} and in relation to ${context}. Evaluate their relative strengths, weaknesses, and suitability for different situations. Provide examples and recommendations for each approach.`;
      } else if (action === "evaluate") {
        mainPrompt = `Critically evaluate a ${subject} with a focus on ${focus} in terms of ${context}. Examine its effectiveness, advantages, and disadvantages. Offer suggestions for improvement and discuss any potential implications or consequences of the evaluation.`;
      } else if (action === "predict") {
        mainPrompt = `Predict the future development and impact of ${subject} with a focus on ${focus} in the context of ${context}. Consider current trends, potential innovations, and any challenges or opportunities that may arise. Discuss the implications of these predictions for the broader field.`;
      } else if (action === "recommend") {
        mainPrompt = `Based on your expertise, recommend the best approach or solution for a ${subject} with a focus on ${focus} considering ${context}. Explain the rationale behind your recommendation, and discuss its advantages, drawbacks, and potential alternatives.`;
      } else if (action === "debate") {
        mainPrompt = `Debate the pros and cons of a ${subject} with a focus on ${focus} in relation to ${context}. Present well-reasoned arguments for both sides and analyze their validity. Consider any potential counterarguments or rebuttals, and provide a balanced conclusion.`;
      } else if (action === "write") {
        mainPrompt = `Write a ${focus} on ${subject} that addresses ${context}. Organize your content in a clear and logical manner, using relevant examples and evidence to support your points.`;
      }
      document.getElementById("prompt").value = systemPrompt + " " + mainPrompt;
    } else {
      alert("Please enter a subject.");
    }
  });
});

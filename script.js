// Form submission
document.getElementById('project-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const idea = document.getElementById('input-textarea').value.trim();
  if (!idea) {
    alert("Please enter a project idea.");
    return;
  }

  document.getElementById('loading-spinner').style.display = 'block';

  const breakdown = await getProjectBreakdown(idea);

  document.getElementById('loading-spinner').style.display = 'none';
  document.getElementById('project-breakdown').innerHTML = breakdown;
  document.getElementById('output-section').style.display = 'block';
});

// Enter key triggers button click
document.getElementById("input-textarea").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("convert-idea").click();
  }
});

// Get project breakdown using the Vercel serverless function
async function getProjectBreakdown(idea) {
  try {
    const response = await fetch('/api/ai21', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idea }),  // Send the project idea to serverless function
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    const projectSteps = data?.completions[0]?.data?.text.trim() || "No content returned.";

    // Convert the returned text into ordered steps
    return `<h3>Steps to Build Your Project:</h3><ol>${projectSteps.split("\n").map(step => `<li>${step.trim()}</li>`).join('')}</ol>`;
  } catch (error) {
    console.error("Error processing the idea:", error);
    return "Sorry, we couldn't process your idea at the moment.";
  }
}

// PDF Export Functionality using jsPDF
document.getElementById('download-pdf').addEventListener('click', () => {
  const pdfContent = document.getElementById('project-breakdown');
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(12);
  doc.html(pdfContent, {
    callback: (doc) => doc.save('project-breakdown.pdf'),
    x: 10,
    y: 10,
    width: 180,
    windowWidth: 1000,
  });
});

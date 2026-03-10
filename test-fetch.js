fetch("http://localhost:3001/events")
    .then(res => res.text())
    .then(text => {
        if (text.includes("Error:") || text.includes("Exception")) {
            console.log("Found error in HTML response preview:");
            const snippet = text.substring(text.indexOf("Error:"), text.indexOf("Error:") + 500);
            console.log(snippet);
        } else {
            console.log("No obvious error text found in HTML.");
        }
    })
    .catch(err => console.error("Fetch failed:", err));

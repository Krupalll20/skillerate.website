const express = require("express");
const router = express.Router();
const { google } = require('googleapis');

router.post("/contactUsCombine", async (req, res) => {

  try {
    const { isBlue } = req.body;

    const auth = new google.auth.GoogleAuth({
      keyFile: "krupalbavishi006GoogleCloud.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    if (isBlue === "true") {

      const { name, email, phoneno, via } = req.body;

      const spreadsheetId = "1MFSXFkhCLhv35sjKesJTfY8Na4tsTOxv_H5684rJuPw";

      const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1"
      })
      var idx = getRows.data.values.length

      await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:E",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[idx, name, email, phoneno, via]]
        }
      })
      res.send({ msg: "success" })
    }
    else {
      const { fname, lname, email, subject, message } = req.body;
      const spreadsheetId = "1K5ghJ73W7ZCdfojX8pm6IJB8zoXOBrLQ8s3Y-Z57BIc";

      const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1"
      })
      var idx = getRows.data.values.length

      await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:F",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[idx, fname, lname, email, subject, message]]
        }
      })
      res.send({ msg: "success" })
    }
  } catch (error) {
    res.status(400).json({ res: "error" });
  }
})

router.post("/applyNow", async (req, res) => {
  try {
    const { FirstName, LastName, Phoneno, Email, LinkedinId, WhyHire, FilePath, LinkOther, CoverLetter } = req.body;

    const auth = new google.auth.GoogleAuth({
      keyFile: "krupalbavishi006GoogleCloud.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    const spreadsheetId = "1tPfuHloeIA3lwGm-iyTjx6CSRTTh9knBSWu4PsFYwXY";

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Sheet1"
    })
    var idx = getRows.data.values.length

    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: "Sheet1!A:J",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[idx, FirstName, LastName, Phoneno, Email, LinkedinId, WhyHire, FilePath, LinkOther, CoverLetter]]
      }
    })
    res.send({ msg: "success" })

  } catch (error) {
    res.status(400).json({ res: "error" });
  }
})

module.exports = router;

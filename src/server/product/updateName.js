const express = require("express");
const { supabase, updateData } = require("../supabase");

const updateEmail = express.Router();
updateEmail.use(express.json());

updateEmail.post("/update/name", async (req, res) => {
  try {
    const { id, name } = req.body;
    const tableName = "product";
    const filter = { id: id };

    const data = {
      name,
    };

    const insertedData = await updateData(tableName, data, filter);

    res.status(200).json({
      message: "Name updated successfully",
      data: insertedData,
    });
  } catch (error) {
    console.error("Error updating product name:", error.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = updateEmail;

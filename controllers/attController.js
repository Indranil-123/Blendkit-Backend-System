

const markAttendence = async (req, res) => {

    const { student_id, date, status } = req.body;
    const query = 'INSERT INTO attendance (student_id, date, status) VALUES (?, ?, ?)';
    db.query(query, [student_id, date, status], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Attendance recorded successfully' });
    });

}



const getAttendance = async (req, res) => {
    const { student_id } = req.params;
    const query = 'SELECT * FROM attendance WHERE student_id = ?';
    db.query(query, [student_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
}
// Get Attendance by Student ID
app.get('/attendance/:student_id', (req, res) => {
    
});


module.exports = {

    markAttendence,
    getAttendance
}
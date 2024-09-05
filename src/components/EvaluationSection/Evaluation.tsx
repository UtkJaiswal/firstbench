import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, IconButton, Divider } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'User1', value: 80, avatar: '/api/placeholder/30/30' },
  { name: 'User2', value: 50, avatar: '/api/placeholder/30/30' },
  { name: 'User3', value: 30, avatar: '/api/placeholder/30/30' },
  { name: 'User4', value: 65, avatar: '/api/placeholder/30/30' },
  { name: 'User5', value: 85, avatar: '/api/placeholder/30/30' },
];

const pieData = [
  { name: 'User1', value: 80 },
  { name: 'User2', value: 50 },
  { name: 'User3', value: 30 },
  { name: 'User4', value: 65 },
  { name: 'User5', value: 85 },
];

const COLORS = ['#4a90e2', '#e91e63', '#ff9800', '#4caf50', '#00bcd4'];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fff' }}>{value}</Typography>
    <Typography variant="body2" sx={{ color: '#fff' }}>{label}</Typography>
  </Box>
);

const Evaluation = () => {
  const [question, setQuestion] = useState('');
  const [showUserQuestion, setShowUserQuestion] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setShowUserQuestion(true);
  };

  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", padding: "50px 20px", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="h4" sx={{ fontFamily: "Karma, serif", fontWeight: 700, textAlign: "center", marginBottom: "20px" }}>
        Evaluation
      </Typography>

      <Card sx={{ backgroundColor: "#FFFBEA", borderRadius: "40px", width: "1228px", padding: "30px", marginBottom: "30px" }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" sx={{ fontFamily: "Karma, serif", fontWeight: 700, marginBottom: "30px", textAlign: "center" }}>
            Drop your PDF and write question you want to evaluate
          </Typography>
          
          <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type your question here..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '20px',
                  }
                }}
              />
              <IconButton component="label" sx={{ ml: 1 }}>
                <input type="file" hidden />
                <AttachFileIcon />
              </IconButton>
            </Box>
            
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                width: "100%",
                borderRadius: "20px",
                backgroundColor: "#000",
                color: "#fff",
                fontFamily: "Karma, serif",
                fontWeight: 700,
                textTransform: "none",
                padding: "10px 0",
                '&:hover': {
                  backgroundColor: "#333",
                },
              }}
            >
              Send
            </Button>
          </form>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ flex: 1, overflowY: 'auto', maxHeight: 200 }}>
            {showUserQuestion && (
              <Box sx={{ marginBottom: "20px", backgroundColor: "#fff", borderRadius: "20px", padding: "15px" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, marginBottom: "10px" }}>
                  Q: {question}
                </Typography>
                <Typography variant="body1">
                  A: I'm sorry, but as an AI language model, I don't have real-time information or the ability to generate responses to new questions. In a real application, this is where an AI would provide an answer to your specific question.
                </Typography>
              </Box>
            )}

            <Box sx={{ backgroundColor: "#fff", borderRadius: "20px", padding: "15px" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, marginBottom: "10px" }}>
                Q: What is artificial intelligence?
              </Typography>
              <Typography variant="body1">
                A: <b>After AI evaluation we have found that:<br /></b>Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. It involves the development of computer systems capable of performing tasks that typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation.
              </Typography>
            </Box>
          </Box>
        </CardContent>

        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ width: '50%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" tick={false} />
                <YAxis hide />
                <Bar dataKey="value" fill="#4a90e2" />
              </BarChart>
            </ResponsiveContainer>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              {data.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <img src={item.avatar} alt={item.name} style={{ width: 30, height: 30, borderRadius: '50%' }} />
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ width: '50%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  fill="#82ca9d"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', backgroundColor: '#e9967a', padding: '30px', borderRadius: '20px' }}>
        <StatItem value="15+" label="Years of experience" />
        <StatItem value="100k" label="Students worldwide" />
        <StatItem value="45+" label="Class subjects" />
        <StatItem value="98%" label="Student satisfactions" />
      </Box>
    </Box>
  );
};

export default Evaluation;

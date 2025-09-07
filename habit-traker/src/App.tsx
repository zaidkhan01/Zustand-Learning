import { Box, Container, Typography } from "@mui/material";

import AddHabitForm from "./components/add-habit-form";
import habitList from "./components/habit-list";
function App() {
  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Traker
        </Typography>

        {/* {Form} */}
        <AddHabitForm />
        <habitList />
      </Box>
    </Container>
  );
}

export default App;

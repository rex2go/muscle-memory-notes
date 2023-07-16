import { MuscleMemoryNotes } from "./components/MuscleMemoryNotes";
import { MuscleMemoryNotesProvider } from "./components/MuscleMemoryNotes";

const App = () => (
  <>
    <MuscleMemoryNotesProvider>
      <MuscleMemoryNotes/>
    </MuscleMemoryNotesProvider>
  </>
);

export default App;

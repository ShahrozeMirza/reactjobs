import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, {jobLoader} from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const API_URL = import.meta.env.VITE_API_URL || '/api';
console.log("API_URL:", import.meta.env.VITE_API_URL);

const App = () => {

  // Add new job 
  const addJob = async (newJob) => {
    const res = await fetch(`${API_URL}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });

    return;
  };
  // Add new job end

  // Delete job
  const deleteJob = async (id) => {
    const res = await fetch(`${API_URL}/jobs/${id}`, {
      method: 'DELETE',
    });

    return;  
  };
  // Delete job end

  // Update job 
  const updateJob = async (job) => {
    const res = await fetch(`${API_URL}/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });

    return;
  };
  // Update end


  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>  
   
  )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
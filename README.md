# React + Vite + JSON Server + TanStack React Query

This is a beginner-friendly project built with **React**, **Vite**, **JSON Server**, and **TanStack React Query** to help you understand data fetching, query caching, and handling mutations in a modern React application.


In this project, I have combined **React**, **Vite**, and **JSON Server** to create a simple app that fetches data from a backend using **TanStack React Query**. This setup will help you understand how to:

- Fetch data from a local server.
- Handle query caching, polling, pagination, and infinite scroll.
- Work with mutations and invalidation.

## Setup

### Step 1: Create a React App with Vite
First, we need to create a new React project using Vite. Open your terminal and run the following command:

bash
npm create vite@latest


Step 2: Install Dependencies
After setting up the Vite app, install the following packages:

JSON Server – to mock a backend API:

bash
Copy code
npm install json-server
TanStack React Query – to handle data fetching and caching:

bash
Copy code
npm install @tanstack/react-query
Step 3: Setup JSON Server
Create a db.js file in the root directory and add your mock data.

Add a script in your package.json to start the JSON server:

json
Copy code
"scripts": {
  "server-json": "json-server --watch db.json --port 4000"
}
Run the JSON server using:

bash
Copy code
npm run server-json
This will start the JSON server on http://localhost:4000.

Step 4: Setting Up React Query
Set up React Query by wrapping your app in the QueryClientProvider in your main.jsx:

jsx
Copy code
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
Use the useQuery hook to fetch data from your JSON server.

Features
Data Fetching with useQuery
Learn how to fetch data from the server using React Query's useQuery. For example:

jsx
Copy code
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('http://localhost:4000/posts');
  return response.json();
};

const Posts = () => {
  const { data, error, isLoading } = useQuery(['posts'], fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
DevTools
React Query comes with powerful DevTools that can help you inspect queries and mutations. You can enable them like this:

jsx
Copy code
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const App = () => (
  <>
    <Posts />
    <ReactQueryDevtools initialIsOpen={false} />
  </>
);
Query Cache & Stale Time
React Query automatically caches data to improve performance. You can customize how long data stays fresh using staleTime.

Polling
You can set up polling to automatically refresh data at regular intervals:

jsx
Copy code
const { data, isLoading } = useQuery(
  ['posts'],
  fetchPosts,
  { refetchInterval: 5000 } // Poll every 5 seconds
);
useQuery on Click
Instead of fetching data on component mount, you can fetch data on user interaction (e.g., button click).

Query by ID
Learn how to fetch data for a specific item by ID using React Query's useQuery.

Pagination & Infinite Scroll
Learn how to paginate data and load more items using the useQuery hook.

Mutations
Handle mutations (e.g., POST, PUT, DELETE requests) with React Query. You can use useMutation to perform these operations.

Query Invalidation
Invalidate queries to refetch data when something changes.

Mutation Response
Learn how to handle the response from a mutation and update your UI accordingly.

Optimistic Updates
Optimistically update your UI when performing mutations, without waiting for the server response.

How to Give a Star
If you found this project helpful, please consider giving it a star! 🌟 This will help me continue improving the project and provide more useful resources. To give a star:

Click on the star icon at the top of this page.
Choose Star from the dropdown.
Thank you for supporting the project!
export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Student Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-xl">
        <p><strong>Name:</strong> Demo Student text-blue-600</p>
        <p><strong>Email:</strong> demo@test.com</p>
        <p><strong>Course:</strong> Artificial Intelligence</p>
        <p><strong>Level:</strong> 2</p>
      </div>
    </div>
  );
}
export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Student Profile</h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-xl text-blue-600">
        <p><strong>Name:</strong> Demo Student</p>
        <p><strong>Email:</strong> demo@test.com</p>
        <p><strong>Course:</strong> Artificial Intelligence</p>
        <p><strong>Level:</strong> 2</p>
      </div>
    </div>
  );
}
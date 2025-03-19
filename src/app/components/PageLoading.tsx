export default function PageLoading() {
    return (
      <div className="space-y-4 p-4 border rounded-lg shadow-lg animate-pulse">
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
      </div>
    );
  }
function UsersLoadingSkeleton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3].map((item) => (
        <div key={item} className="p-4 rounded-lg bg-slate-800/30 animate-pulse">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-slate-700"></div>
            <div className="flex-1">
              <div className="w-3/4 h-4 mb-2 rounded bg-slate-700"></div>
              <div className="w-1/2 h-3 rounded bg-slate-700/70"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default UsersLoadingSkeleton;
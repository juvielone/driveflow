import { CheckCircle } from "lucide-react";

export default function Benefits() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center">Why DriveFlow?</h3>
      <div className="grid gap-3">
        <div className="flex items-center gap-3 text-sm">
          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
          <span>Manage your schedule efficiently</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
          <span>Reduce cancellations and no-shows</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
          <span>Track student progress easily</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
          <span>Get paid faster with online payments</span>
        </div>
      </div>
    </div>
  );
} 
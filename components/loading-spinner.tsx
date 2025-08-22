"use client"

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-muted rounded-full animate-spin border-t-hackclub-red"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-hackclub-red/30"></div>
        </div>
        <p className="text-muted-foreground animate-pulse">Loading HackClubSBS...</p>
      </div>
    </div>
  )
}

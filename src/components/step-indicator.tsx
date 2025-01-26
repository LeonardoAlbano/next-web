interface StepIndicatorProps {
  currentStep: number
  steps: {
    number: number
    label: string
  }[]
}

export function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="relative flex justify-center">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                step.number <= currentStep
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-muted bg-background text-muted-foreground'
              }`}
            >
              {step.number}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-[2px] w-24 transition-colors ${step.number < currentStep ? 'bg-primary' : 'bg-muted'}`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between px-6">
        {steps.map((step) => (
          <span key={step.number} className="text-sm text-muted-foreground">
            {step.label}
          </span>
        ))}
      </div>
    </div>
  )
}

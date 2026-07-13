export interface WorkflowStep {
  title: string
  description: string
  bg:string
}

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Book",
    description: "Choose your service package and schedule online.",
    bg: "/process/process_1.png",
  },
  {
    title: "Scheduling",
    description: "Our AI optimizes the best schedule for your field.",
    bg: "/process/process_2.png",
  },
  {
    title: "Operator",
    description: "A certified operator is assigned to your booking.",
    bg: "/process/process_3.png",
  },
  {
    title: "Machine",
    description: "The appropriate transplanter is deployed.",
    bg: "/process/process_4.png",
  },
  {
    title: "Transplant",
    description: "Precision mechanized transplanting on your scheduled date.",
    bg: "/process/process_5.png",
  },
  {
    title: "Digital Report",
    description: "Receive a complete digital report of the service performed.",
    bg: "/process/process_6.png",
  },
];
export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  estTime: string;
  impact: string;
  imageUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: "urban-farming",
    title: "Urban Farming Initiative",
    description: "A revolutionary approach to urban agriculture that maximizes space utilization while minimizing resource consumption. Our vertical farming solutions bring sustainable food production directly to urban centers.",
    features: [
      "Space-efficient design",
      "90% less water usage",
      "Year-round growing cycle",
      "Reduced carbon footprint",
      "No pesticides needed",
    ],
    estTime: "4-6 months",
    impact: "Creates jobs for 80+ urban farmers and provides fresh produce to local communities",
    category: "Agriculture"
  },
  {
    id: "smart-grid",
    title: "Smart Grid Solutions",
    description: "Intelligent power distribution networks that optimize electricity flow, reduce waste, and integrate renewable energy sources seamlessly into existing infrastructure.",
    features: [
      "Real-time load balancing",
      "Renewable integration",
      "Predictive maintenance",
      "Demand forecasting",
      "Energy theft detection"
    ],
    estTime: "8-12 months",
    impact: "Reduces energy wastage by 30% and improves grid reliability by 45%",
    category: "Energy"
  },
  {
    id: "water-purification",
    title: "Advanced Water Purification",
    description: "Cutting-edge water treatment technology that removes contaminants and provides clean drinking water in areas with limited access to traditional water infrastructure.",
    features: [
      "Solar-powered operation",
      "Removes 99.9% of contaminants",
      "Low maintenance requirements",
      "Portable design",
      "Real-time quality monitoring"
    ],
    estTime: "3-5 months",
    impact: "Provides clean water access to 10,000+ people per installation",
    category: "Health"
  },
  {
    id: "telemedicine",
    title: "Rural Telemedicine Network",
    description: "Connecting remote communities with medical specialists through high-quality video consultations and remote diagnostic tools.",
    features: [
      "Low-bandwidth capability",
      "Encrypted patient data",
      "Remote vital monitoring",
      "AI-assisted diagnostics",
      "Medication tracking system"
    ],
    estTime: "6-8 months",
    impact: "Improves healthcare access for 50,000+ patients in underserved regions",
    category: "Health"
  }
]; 
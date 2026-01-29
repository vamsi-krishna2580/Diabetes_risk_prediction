import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, HelpCircle, Activity } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Switch } from "@/app/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

interface FormData {
  age: string;
  pregnancies: string;
  glucose: string;
  bloodPressure: string;
  skinThickness: string;
  insulin: string;
  bmi: string;
  familyHistory: boolean;
}

export default function Assessment() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    age: "",
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    familyHistory: false,
  });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Map family history → approximate DPF
  const dpf = formData.familyHistory ? 0.7 : 0.2;

  const payload = {
    age: Number(formData.age),
    pregnancies: Number(formData.pregnancies),
    glucose: Number(formData.glucose),
    bloodPressure: Number(formData.bloodPressure),
    skinThickness: Number(formData.skinThickness),
    insulin: Number(formData.insulin),
    bmi: Number(formData.bmi),
    dpf: dpf,
  };

  try {
    const response = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    navigate("/result", {
      state: {
        prediction: result.prediction,
        formData,
      },
    });

  } catch (error) {
    console.error("Prediction error:", error);
    alert("Unable to connect to prediction service.");
  }
};


  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                Patient Assessment Form
              </h1>
            </div>
            <p className="text-gray-600">
              Please provide accurate information for the most reliable risk assessment
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          <TooltipProvider>
            <div className="space-y-6">
              {/* Age */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="age" className="text-base font-semibold">Age (years)</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your current age in years. Risk increases with age.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="age"
                  type="number"
                  placeholder="e.g., 35"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  required
                  className="py-6 text-base"
                />
              </div>

              {/* Pregnancies */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="pregnancies" className="text-base font-semibold">Number of Pregnancies</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Total number of pregnancies (enter 0 if none)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="pregnancies"
                  type="number"
                  placeholder="e.g., 2"
                  value={formData.pregnancies}
                  onChange={(e) => handleInputChange("pregnancies", e.target.value)}
                  required
                  className="py-6 text-base"
                />
              </div>

              {/* Glucose */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="glucose" className="text-base font-semibold">Glucose Level (mg/dL)</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Plasma glucose concentration (2 hours in an oral glucose tolerance test)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="glucose"
                  type="number"
                  placeholder="e.g., 120"
                  value={formData.glucose}
                  onChange={(e) => handleInputChange("glucose", e.target.value)}
                  required
                  className="py-6 text-base"
                />
              </div>

              {/* Blood Pressure */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="bloodPressure" className="text-base font-semibold">Blood Pressure (mmHg)</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Diastolic blood pressure (the bottom number)</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="bloodPressure"
                  type="number"
                  placeholder="e.g., 70"
                  value={formData.bloodPressure}
                  onChange={(e) => handleInputChange("bloodPressure", e.target.value)}
                  required
                  className="py-6 text-base"
                />
              </div>

              {/* Skin Thickness */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="skinThickness" className="text-base font-semibold">Skin Thickness (mm)</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Triceps skin fold thickness measurement</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="skinThickness"
                  type="number"
                  placeholder="e.g., 20"
                  value={formData.skinThickness}
                  onChange={(e) => handleInputChange("skinThickness", e.target.value)}
                  required
                  className="py-6 text-base"
                />
              </div>

              {/* Insulin */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="insulin" className="text-base font-semibold">Insulin Level (μU/mL)</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>2-Hour serum insulin level</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="insulin"
                  type="number"
                  placeholder="e.g., 79"
                  value={formData.insulin}
                  onChange={(e) => handleInputChange("insulin", e.target.value)}
                  required
                  className="py-6 text-base"
                />
              </div>

              {/* BMI */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="bmi" className="text-base font-semibold">Body Mass Index (BMI)</Label>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="w-4 h-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Weight in kg/(height in m)²</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="bmi"
                  type="number"
                  step="0.1"
                  placeholder="e.g., 32.0"
                  value={formData.bmi}
                  onChange={(e) => handleInputChange("bmi", e.target.value)}
                  required
                  className="py-6 text-base"
                />
              </div>

              {/* Family History */}
              <div className="space-y-2 bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="familyHistory" className="text-base font-semibold cursor-pointer">
                      Family History of Diabetes
                    </Label>
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="w-4 h-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Do you have immediate family members (parents, siblings) with diabetes?</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Switch
                    id="familyHistory"
                    checked={formData.familyHistory}
                    onCheckedChange={(checked) => handleInputChange("familyHistory", checked)}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  {formData.familyHistory ? "Yes, I have family history" : "No family history"}
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 space-y-4">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-6 text-lg"
              >
                Predict Diabetes Risk
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Your information is used only for risk calculation and is not stored
              </p>
            </div>
          </TooltipProvider>
        </form>
      </div>
    </div>
  );
}

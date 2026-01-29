import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Brain, Code, Target, Shield, Users } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 md:p-12 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About This System
            </h1>
            <p className="text-xl text-blue-50">
              Understanding diabetes risk prediction and early detection
            </p>
          </div>

          {/* Content Sections */}
          <div className="p-8 md:p-12 space-y-12">
            {/* What is Type 2 Diabetes */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  What is Type 2 Diabetes?
                </h2>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  Type 2 diabetes is a chronic condition that affects the way your body metabolizes sugar (glucose). 
                  With Type 2 diabetes, your body either resists the effects of insulin — a hormone that regulates 
                  the movement of sugar into your cells — or doesn't produce enough insulin to maintain normal glucose levels.
                </p>
                <p className="mb-4">
                  Type 2 diabetes used to be known as adult-onset diabetes, but both Type 1 and Type 2 diabetes can 
                  begin during childhood and adulthood. Type 2 is more common in older adults, but the increase in 
                  obesity has led to more cases in younger people.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-blue-900">Key Statistics:</p>
                  <ul className="list-disc ml-6 mt-2 space-y-1 text-blue-800">
                    <li>Over 537 million adults worldwide have diabetes</li>
                    <li>Type 2 diabetes accounts for about 90-95% of all diabetes cases</li>
                    <li>Many people with Type 2 diabetes don't know they have it</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Why Early Prediction Matters */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Why Early Risk Prediction Matters
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Prevention Opportunities</h3>
                  <p className="text-gray-700">
                    Early detection allows individuals to make lifestyle changes that can prevent or delay 
                    the onset of Type 2 diabetes, including diet modifications and increased physical activity.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Better Outcomes</h3>
                  <p className="text-gray-700">
                    Early intervention leads to better long-term health outcomes, reducing the risk of 
                    complications such as heart disease, kidney damage, and vision problems.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Cost Reduction</h3>
                  <p className="text-gray-700">
                    Preventing diabetes is more cost-effective than treating it and its complications, 
                    benefiting both individuals and healthcare systems.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-2">Quality of Life</h3>
                  <p className="text-gray-700">
                    Early detection and prevention help maintain quality of life by avoiding the daily 
                    management challenges and potential complications of diabetes.
                  </p>
                </div>
              </div>
            </section>

            {/* Technologies Used */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Code className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Technologies Used
                </h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-800 mb-1">Python</h3>
                  <p className="text-gray-700">
                    The core machine learning model is developed using Python, the leading programming 
                    language for data science and machine learning applications.
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-800 mb-1">Support Vector Machine (SVM)</h3>
                  <p className="text-gray-700">
                    SVM is a powerful supervised machine learning algorithm used for classification tasks. 
                    It works by finding the optimal hyperplane that best separates different classes (in this case, 
                    high risk vs. low risk for diabetes).
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-800 mb-1">Machine Learning</h3>
                  <p className="text-gray-700">
                    Our model is trained on historical patient data to identify patterns and risk factors 
                    associated with Type 2 diabetes, enabling accurate risk predictions for new patients.
                  </p>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Brain className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  How the System Works
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Data Collection</h3>
                    <p className="text-gray-700">
                      Patients provide key health metrics including age, BMI, glucose levels, blood pressure, 
                      and family history through a simple questionnaire.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Data Processing</h3>
                    <p className="text-gray-700">
                      The input data is normalized and formatted to match the requirements of our trained SVM model.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Risk Prediction</h3>
                    <p className="text-gray-700">
                      The SVM algorithm analyzes the data and predicts whether the patient is at high or low risk 
                      of developing Type 2 diabetes based on learned patterns.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Results & Recommendations</h3>
                    <p className="text-gray-700">
                      The system provides a clear risk assessment along with personalized recommendations for 
                      next steps, whether that's lifestyle changes or professional medical consultation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Notice */}
            <section className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Important Notice</h3>
                  <p className="text-yellow-800 mb-2">
                    This system is designed as a <strong>decision support tool</strong> and educational project. 
                    It is NOT intended to:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 text-yellow-800">
                    <li>Replace professional medical diagnosis</li>
                    <li>Serve as medical advice or treatment recommendation</li>
                    <li>Be used as the sole basis for medical decisions</li>
                  </ul>
                  <p className="text-yellow-800 mt-2">
                    Always consult with qualified healthcare professionals for proper medical evaluation, 
                    diagnosis, and treatment.
                  </p>
                </div>
              </div>
            </section>

            {/* Project Info */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Project Information
                </h2>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Project Type:</strong> College Capstone Project
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Purpose:</strong> Educational and Research
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Scope:</strong> Demonstrating the application of machine learning in healthcare risk assessment
                </p>
                <p className="text-gray-700">
                  <strong>Disclaimer:</strong> This project is developed for academic purposes and should be used 
                  accordingly. All results should be verified by medical professionals.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center pt-6">
              <Link to="/assessment">
                <Button 
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-12 py-6 text-lg"
                >
                  Start Your Assessment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

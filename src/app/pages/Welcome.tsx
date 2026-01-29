import { Link } from "react-router-dom";
import { Heart, Activity, Brain } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Diabetes Risk Prediction System
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Predicting Type 2 Diabetes Risk Using Machine Learning (SVM)
          </p>
        </header>

        {/* Hero Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Illustration Section */}
            <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-teal-500 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm p-8 rounded-3xl">
                  <Heart className="w-32 h-32 text-white mx-auto mb-4" />
                  <div className="flex gap-4 justify-center mt-6">
                    <div className="bg-white/30 p-4 rounded-xl">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    <div className="bg-white/30 p-4 rounded-xl">
                      <Activity className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Early Detection Matters
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This decision support system uses advanced machine learning algorithms 
                to assess your risk of developing Type 2 diabetes. Early detection can 
                help you take preventive measures and maintain a healthy lifestyle.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg mt-1">
                    <Activity className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Quick Assessment</h3>
                    <p className="text-sm text-gray-600">
                      Simple questionnaire takes only 3-5 minutes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">ML-Powered</h3>
                    <p className="text-sm text-gray-600">
                      Using Support Vector Machine algorithm
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg mt-1">
                    <Heart className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Risk Assessment</h3>
                    <p className="text-sm text-gray-600">
                      Not a diagnosis - for screening purposes only
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link to="/assessment">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-6 text-lg"
                  >
                    Start Assessment
                  </Button>
                </Link>
                <Link to="/about">
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-blue-200 text-blue-700 hover:bg-blue-50 py-6 text-lg"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500">
          <p className="text-sm">
            College Capstone Project | For Educational and Research Purposes
          </p>
        </footer>
      </div>
    </div>
  );
}

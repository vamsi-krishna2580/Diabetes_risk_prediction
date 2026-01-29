import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AlertCircle, CheckCircle2, Home, RotateCcw, Info } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { prediction, formData } = location.state || {};
  const isHighRisk = prediction === "High Risk";

  useEffect(() => {
    if (!location.state || !prediction) {
      navigate("/");
    }
  }, [location.state, prediction, navigate]);

  if (!prediction) {
    return null;
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Result Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className={`p-8 text-center ${
            isHighRisk 
              ? 'bg-gradient-to-r from-orange-500 to-red-500' 
              : 'bg-gradient-to-r from-green-500 to-teal-500'
          }`}>
            <div className="flex justify-center mb-4">
              {isHighRisk ? (
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <AlertCircle className="w-16 h-16 text-white" />
                </div>
              ) : (
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <CheckCircle2 className="w-16 h-16 text-white" />
                </div>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Risk Assessment Result
            </h1>
            <p className="text-white/90 text-lg">
              Based on your provided information
            </p>
          </div>

          {/* Result Content */}
          <div className="p-8 md:p-12">
            <div className={`border-l-4 ${
              isHighRisk ? 'border-red-500 bg-red-50' : 'border-green-500 bg-green-50'
            } p-6 rounded-lg mb-8`}>
              <h2 className={`text-2xl font-bold mb-2 ${
                isHighRisk ? 'text-red-800' : 'text-green-800'
              }`}>
                {isHighRisk 
                  ? 'High Risk of Developing Type 2 Diabetes' 
                  : 'Low Risk of Developing Type 2 Diabetes'
                }
              </h2>
              <p className={`${
                isHighRisk ? 'text-red-700' : 'text-green-700'
              }`}>
                {isHighRisk
                  ? 'The assessment indicates elevated risk factors. Please consult with a healthcare professional for proper evaluation.'
                  : 'The assessment indicates low risk factors. Continue maintaining a healthy lifestyle.'}
              </p>
            </div>

            {/* Disclaimer */}
            <Alert className="mb-8 border-blue-200 bg-blue-50">
              <Info className="h-5 w-5 text-blue-600" />
              <AlertTitle className="text-blue-900 font-bold">Important Disclaimer</AlertTitle>
              <AlertDescription className="text-blue-800">
                <strong>This result is for risk assessment only and not a clinical diagnosis.</strong>
                <br />
                This tool is designed as a decision support system to help identify potential risk factors. 
                It should not replace professional medical advice, diagnosis, or treatment. 
                Always consult with qualified healthcare providers for proper medical evaluation and care.
              </AlertDescription>
            </Alert>

            {/* Recommendations */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-gray-800 mb-4 text-xl">
                {isHighRisk ? 'Recommended Next Steps' : 'Recommendations'}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {isHighRisk ? (
                  <>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Schedule an appointment with your healthcare provider for proper screening</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Request comprehensive blood glucose and HbA1c tests</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Discuss lifestyle modifications including diet and exercise</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Monitor your blood pressure and weight regularly</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Maintain a balanced diet rich in vegetables, fruits, and whole grains</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Engage in regular physical activity (at least 150 minutes per week)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Schedule routine health check-ups annually</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>Continue monitoring your health metrics</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/assessment" className="flex-1">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-blue-200 text-blue-700 hover:bg-blue-50 py-6 text-lg"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  New Assessment
                </Button>
              </Link>
              <Link to="/" className="flex-1">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-6 text-lg"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Technology Note */}
            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Powered by Support Vector Machine (SVM) Algorithm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

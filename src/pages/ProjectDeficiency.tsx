
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Cpu,
  ShieldCheck,
  Activity,
  BrainCircuit,
  Database,
  GitBranch
} from 'lucide-react';

import { FadeIn } from '../components/ui/FadeIn';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

export function ProjectDeficiency() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-24">

      <Link
        to="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors mb-12"
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </Link>

      <FadeIn>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-50 mb-6">
          Deficiency Detection AI
        </h1>

        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
          An AI-powered computer vision platform that analyzes nail and tongue
          images to identify potential vitamin deficiencies using Convolutional
          Neural Networks (CNNs), automated image processing, and real-time
          inference APIs.
        </p>

        <div className="flex flex-wrap gap-2 mb-16">
          <Badge>Python</Badge>
          <Badge>CNN</Badge>
          <Badge>Deep Learning</Badge>
          <Badge>Flask</Badge>
          <Badge>OpenCV</Badge>
          <Badge>TensorFlow</Badge>
          <Badge>Computer Vision</Badge>
          <Badge>REST API</Badge>
        </div>

      </FadeIn>

      <div className="space-y-20">

        {/* BUSINESS PROBLEM */}

        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Problem Statement
          </h2>

          <p className="text-zinc-400 leading-relaxed text-lg">
            Vitamin deficiencies often present visible physical indicators such
            as nail discoloration, ridges, tongue texture changes, and color
            abnormalities. Traditional diagnosis requires laboratory testing,
            medical infrastructure, and clinical consultation.
          </p>

          <p className="text-zinc-400 leading-relaxed text-lg mt-4">
            The objective was to build a computer vision system capable of
            analyzing visual biomarkers from images and providing preliminary
            deficiency predictions through an accessible AI-powered platform.
          </p>
        </FadeIn>

        {/* SYSTEM ARCHITECTURE */}

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            System Architecture
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Card className="p-6 border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4">
                <BrainCircuit size={20} className="text-zinc-300" />
                <h3 className="font-bold text-zinc-100">
                  Model Training Pipeline
                </h3>
              </div>

              <ul className="space-y-3 text-sm text-zinc-400">
                <li>• Dataset collection and labeling.</li>
                <li>• Image preprocessing using OpenCV.</li>
                <li>• Image normalization and resizing.</li>
                <li>• Data augmentation.</li>
                <li>• CNN architecture training.</li>
                <li>• Validation and performance evaluation.</li>
                <li>• Model export and deployment.</li>
              </ul>
            </Card>

            <Card className="p-6 border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4">
                <Cpu size={20} className="text-zinc-300" />
                <h3 className="font-bold text-zinc-100">
                  Inference Pipeline
                </h3>
              </div>

              <ul className="space-y-3 text-sm text-zinc-400">
                <li>• Image upload via Flask API.</li>
                <li>• Automated preprocessing.</li>
                <li>• CNN prediction execution.</li>
                <li>• Confidence score generation.</li>
                <li>• Deficiency classification.</li>
                <li>• Diagnostic report generation.</li>
                <li>• JSON response delivery.</li>
              </ul>
            </Card>

          </div>
        </FadeIn>

        {/* ML PIPELINE */}

        <FadeIn delay={0.3}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Machine Learning Pipeline
          </h2>

          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 overflow-x-auto whitespace-pre">
{`Image Upload
     ↓
OpenCV Preprocessing
     ↓
Normalization
     ↓
Data Augmentation
     ↓
CNN Feature Extraction
     ↓
Classification Layer
     ↓
Prediction Score
     ↓
Diagnostic Result`}
          </div>

          <div className="mt-6 space-y-4 text-zinc-400">

            <p>
              <strong className="text-zinc-200">
                Image Preprocessing:
              </strong>{" "}
              Images are resized, normalized, and cleaned before being passed
              into the CNN model.
            </p>

            <p>
              <strong className="text-zinc-200">
                Data Augmentation:
              </strong>{" "}
              Rotation, flipping, brightness adjustments, and zoom operations
              increase dataset diversity and improve model generalization.
            </p>

            <p>
              <strong className="text-zinc-200">
                CNN Classification:
              </strong>{" "}
              Deep convolutional layers automatically learn visual features
              related to deficiency indicators.
            </p>

          </div>
        </FadeIn>

        {/* DATASET */}

        <FadeIn delay={0.4}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Dataset Challenges
          </h2>

          <p className="text-zinc-400 leading-relaxed">
            Medical image datasets are often small, imbalanced, and difficult
            to obtain. Significant effort was spent on preprocessing,
            augmentation, and validation strategies to reduce overfitting and
            improve prediction reliability.
          </p>
        </FadeIn>

        {/* TRADEOFFS */}

        <FadeIn delay={0.5}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Engineering Decisions & Trade-offs
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2">
                <Activity size={18} />
                Data Scarcity & Overfitting
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Heavy augmentation and dropout layers were implemented to
                improve generalization. The trade-off was increased training
                time and computational cost.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2">
                <ShieldCheck size={18} />
                Server-side Inference
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Inference is executed on the server using Flask, allowing larger
                and more accurate models while simplifying deployment and model
                updates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2">
                <GitBranch size={18} />
                Model Complexity vs Latency
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Larger CNN architectures improved accuracy but increased
                inference time. The final architecture balanced performance and
                responsiveness.
              </p>
            </div>

          </div>
        </FadeIn>

        {/* DEPLOYMENT */}

        <FadeIn delay={0.6}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Deployment Architecture
          </h2>

          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 font-mono text-sm text-zinc-300 overflow-x-auto whitespace-pre">
{`Client
   ↓
Flask API
   ↓
OpenCV Processing
   ↓
CNN Model
   ↓
Prediction Engine
   ↓
JSON Response`}
          </div>
        </FadeIn>

        {/* RESULTS */}

        <FadeIn delay={0.7}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Results & Impact
          </h2>

          <p className="text-zinc-400 leading-relaxed text-lg">
            Successfully developed an end-to-end AI diagnostic platform capable
            of preprocessing medical images, performing CNN-based deficiency
            classification, generating confidence scores, and serving
            predictions through a REST API. The project demonstrates practical
            application of deep learning, computer vision, and production-style
            model deployment workflows.
          </p>
        </FadeIn>

      </div>
    </div>
  );
}


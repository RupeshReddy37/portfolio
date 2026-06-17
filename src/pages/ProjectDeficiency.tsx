import * as React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, ShieldCheck, Activity, BrainCircuit } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

export function ProjectDeficiency() {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-24">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors mb-12">
        <ArrowLeft size={16} /> Back to Portfolio
      </Link>
      
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-50 mb-6">Deficiency Detection AI</h1>
        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
          An AI-powered diagnostic tool utilizing Convolutional Neural Networks (CNN) to detect vitamin deficiencies from non-invasive image inputs.
        </p>
        <div className="flex flex-wrap gap-2 mb-16">
          <Badge>Python</Badge><Badge>Deep Learning</Badge><Badge>CNN</Badge><Badge>Flask</Badge><Badge>OpenCV</Badge>
        </div>
      </FadeIn>

      <div className="space-y-20">
        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">Problem Statement</h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            Traditional blood tests for vitamin deficiencies require clinical infrastructure, are invasive, and can be slow. Physical markers (such as nail ridges or tongue discoloration) often indicate deficiencies early. The goal was to build a computer vision pipeline capable of classifying these markers accurately to provide an accessible, preliminary screening tool.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">AI Pipeline & Architecture</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">The system is divided into a robust ML pipeline and a serving backend.</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="p-6 border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4"><BrainCircuit className="text-zinc-300" size={20}/><h3 className="font-bold text-zinc-100">Model Training Pipeline</h3></div>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>•FF��vW7F����B&�v�&�W2Vv�V�FF������Ɠ��Ɠ�(
 Image preprocessing via OpenCV (normalization, resizing).</li>
                <li>• Multi-class classification using a custom Convolutional Neural Network (CNN) built in Python.</li>
              </ul>
            </Card>
            <Card className="p-6 border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4"><Cpu className="text-zinc-300" size={20}/><h3 className="font-bold text-zinc-100">Backend API Flow</h3></div>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>• Flask REST API handles multipart/form-data image uploads.</li>
                <li>• Synchronous inference via the loaded model weights.</li>
                <li>• JSON response formatting with confidence scores.</li>
                <li>• Real-time diagnostic PDF report generation.</li>
              </ul>
            </Card>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">Technical Challenges & Trade-offs</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2"><Activity size={18}/> Data Scarcity & Overfitting</h3>
              <p className="text-zinc-400 text-sm leading-relaxed"><strong className="text-zinc-300">Challenge:</strong> Medical datasets are notoriously scarce. Training a deep network on a small dataset leads to severe overfitting. <br/><bp/><strong className="text-zinc-300">Solution:</strong> I applied heavy synthetic data augmentation and implemented dropout layers within the CNN. <strong className="text-zinc-300">Trade-off:</strong> This increased training time significantly but vastly improved the model's generalization to unseen demographic data.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2"><ShieldCheck size={18}/> Edge vs. Server Inference</h3>
              <p className="text-zinc-400 text-sm leading-relaxed"><strong className="text-zinc-300">Trade-off:</strong> Running inference on the edge saves server costs and improves privacy, but limits model complexity. I chose <strong className="text-zinc-300">Server-side inference (Flask)</strong> to allow for a heavier, more accurate CNN architecture and centralized model updates, accepting the trade-off of requiring stable network connectivity.</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">Future Improvements</h2>
          <ul className="list-disc list-outside ml-5 space-y-3 text-zinc-400 leading-relaxed marker:text-zinc-600">
            <li><strong className="text-zinc-200">Model Quantization:</strong> Reducing the model size using techniques like INT8 quantization to decrease RAM usage on the Flask server.</li>
            <li><strong className="text-zinc-200">Asynchronous Processing:</strong> Implementing a task queue (e.g., Celery/Redis) so the API doesn't block during inference under heavy load.</li>
            <li><strong className="text-zinc-200">Explainable AI (XAI):</strong> Integrating Grad-CAM to output heatmaps showing exactly which part of the image led to the model's diagnosis, increasing clinical trust.</li>
          </ul>
        </FadeIn>
      </div>
    </div>
  );
}
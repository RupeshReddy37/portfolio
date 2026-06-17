const fs = require('fs');

const ragParts = [
"import * as React from 'react';\n",
"import { Link } from 'react-router-dom';\n",
"import { ArrowLeft, Database, Server, Lock, Activity, GitCommit } from 'lucide-react';\n",
"import { FadeIn } from '../components/ui/FadeIn';\n",
"import { Badge } from '../components/ui/Badge';\n",
"import { Card } from '../components/ui/Card';\n\n",
"export function ProjectRAG() {\n",
"  React.useEffect(() => { window.scrollTo(0, 0); }, []);\n\n",
"  return (\n",
"    <div className=\"mx-auto w-full max-w-4xl px-6 py-24\">\n",
"      <Link to=\"/\" className=\"inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors mb-12\">\n",
"        <ArrowLeft size={16} /> Back to Portfolio\n",
"      </Link>\n",
"      \n",
"      <FadeIn>\n",
"        <h1 className=\"text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-50 mb-6\">Enterprise-Grade Java RAG System</h1>\n",
"        <p className=\"text-xl text-zinc-400 mb-8 leading-relaxed\">\n",
"          A production-ready Retrieval-Augmented Generation application integrating a locally hosted LLM with Spring Boot and Qdrant.\n",
"        </p>\n",
"        <div className=\"flex flex-wrap gap-2 mb-16\">\n",
"          <Badge>Java</Badge><Badge>Spring Boot</Badge><Badge>LangChain4j</Badge><Badge>Qdrant</Badge><Badge>PostgreSQL</Badge><Badge>Docker</Badge>\n",
"        </div>\n",
"      </FadeIn>\n\n",
"      <div className=\"space-y-20\">\n",
"        <FadeIn delay={0.1}>\n",
"          <h2 className=\"text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2\">Problem Statement</h2>\n",
"          <p className=\"text-zinc-400 leading-relaxed text-lg\">\n",
"            Standard Large Language Models lack context of proprietary internal documentation, leading to hallucinations or generic answers. Enterprise environments require secure, high-accuracy query systems that do not expose internal documents to third-party cloud APIs (like OpenAI). The goal was to build a system that keeps data on-premise while delivering highly accurate, context-aware AI interactions.\n",
"          </p>\n",
"        </FadeIn>\n\n",
"        <FadeIn delay={0.2}>\n",
"          <h2 className=\"text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2\">System Architecture & API Flow</h2>\n",
"          <p className=\"text-zinc-400 leading-relaxed mb-6\">The architecture follows a strict service-oqɥ��ѕ����ͥ����͕�ɕ��ѥ���ѡ�����յ��Ё�����ѥ�������������ɽ��ѡ���͕ȁ�Օ��������������q���(�����������q���(������������؁�����9����p��ɥ�����ɥ�����̴ȁ����؁����p��q���(���������������ɐ������9����p���؁��ɑ�ȵ饹���������饹��������p��q���(����������������؁�����9����p�������ѕ�̵���ѕȁ����́����p����х��͔������9����p�ѕ�е饹�����p��ͥ���������́�����9����p����е�����ѕ�е饹�����p��ĸ�%����ѥ���������𽑥��q���(����������������հ������9����p��������́ѕ�еʹ�ѕ�е饹�����p��q���(�����������������������[Y[��\�YY�XH�T�TK��O�����O��(�\��Y[��[��Y
ݙ\�\[���[X[�X��[���K��O�����O��(�[X�Y[����[�\�]Y��[H[��ܙY[���ۙϔY�[����ۙϋ��O�����O��(���[Y[�Y]Y]HX\Y[��ܙY[���ۙϔ��ܙT�S���ۙϋ��O������[�������\�������\��\�Ә[YOW�M��ܙ\�^�[��N��^�[��NL��������]��\�Ә[YOW��^][\�X�[�\��\L�X�M���\��\��\�Ә[YOW�^^�[��L���^�O^̌KϏ��\�Ә[YOW��۝X��^^�[��LL����]Y\�H����Ϗ�]������[�\�Ә[YOW��X�K^KL�^\�H^^�[��M������O��(�\�\�]Y\�H[X�YY�XHH�[YH��[[�[��O�����O��(�M�����ɥ��͕�ɍ���ᕍ�ѕ��������ЁE�Ʌ�и𽱤�q���(����������������������۝^Y�]Y�]��ܙT�SY]Y]K��O�����O��(�������ɽ��Ё���͕��Ѽ�������114�٥�����ɽ���1�������Ѩ���ɽ����𽱤�q���(����������������հ�q���(���������������ɐ�q���(�����������𽑥��q���(�������������%��q�q���(�������������%��������������q���(������������ȁ�����9����p�ѕ�д�ᰁ���е�����ѕ�е饹���������؁��ɑ�ȵ����ɑ�ȵ饹����������p���х��͔��ͥ������ф�%�ѕ�ɥ�����q���(�������������������9����p�ѕ�е饹��������������ɕ��ᕐ�����p��q���(���������������Յ����х��͔���Ʌѕ��݅́�����啐�Ѽ���ѥ��锁��Ѡ�͕���ѥ��͕�ɍ�������Ʌ�ͅ�ѥ�������ѕ�ɥ��q���(��������������q���(������������؁�����9����p����饹��������ɑ�ȁ��ɑ�ȵ饹������ɽչ���������؁���е�����ѕ�еʹ�ѕ�е饹�������ٕə��ܵ൅�Ѽ�ݡ�ѕ�������ɕp��q���(����������������A��ѝɕME0�M�������5�х��ф���U͕ȁMхѕ̥q���(�������������Q����聑��յ����q���(��������������������UU%��A,�q���(��������������������������YI!H�q���(����������������������}��є��Q%5MQ5@�q���(����������������������}��ٕ���9U4�q�q���(�����������������E�Ʌ�ЁY��ѽȁM���������������̥q���(�������������������ѥ��耝��ѕ��ɥ͕}���ݱ�����q���(����������������ٕ�ѽ��l���������ͥ���uq���(������������������屽���쁑��}���UU%����չ�}������%9P�����ѕ���QaP��q���(�����������𽑥��q���(�������������%��q�q���(�������������%��������������q���(������������ȁ�����9����p�ѕ�д�ᰁ���е�����ѕ�е饹���������؁��ɑ�ȵ����ɑ�ȵ饹����������p���ѡ��ѥ��ѥ�����M���ɥ��������q���(�������������������9����p�ѕ�е饹��������������ɕ��ᕐ�����p��q���(�������������Q��͕��ɔ�ѡ��IMP�A%̰���ɽ���Ё)]P���͕����ѡ��ѥ��ѥ������ѕ��݅́��������ѕ��q���(��������������q���(������������հ������9����p����е��͌����е���ͥ������ԁ�������Ёѕ�е饹��������������ɕ��ᕐ���ɭ���ѕ�е饹�����p��q���(������������������ɽ��������9����p�ѕ�е饹�����p��Mхѕ���́�Ѡ����ɽ����M�ɥ���M���ɥ�䁙��ѕȁ��������ѕɍ���́ɕ�Օ��̰�م����ѥ���)]P�ͥ�����ɕ́ݥѡ��Ёɕ�եɥ���͕�ͥ����хє�𽱤�q���(������������������ɽ��������9����p�ѕ�е饹�����p��I����	�͕������́���ɽ�����ɽ�����������́�ɔ�͕��ɕ��٥����ѡ�����ٕ��͕��ɥ�䰁����ɥ������䁅�ѡ�ɥ镐����ͽ�������������������յ���́Ѽ�ѡ��ٕ�ѽȁ�𽱤�q���(������������������ɽ��������9����p�ѕ�е饹�����p���ф�%ͽ��ѥ������ɽ����EՕɥ�́�ɔ����ѕɕ����ѡ���͕ȝ́�����́��ٕ������ɔ���ə�ɵ����ѡ��ٕ�ѽȁ͕�ɍ��𽱤�q���(������������հ�q���(�������������%��q�q���(�������������%��������������q���(������������ȁ�����9����p�ѕ�д�ᰁ���е�����ѕ�е饹���������؁��ɑ�ȵ����ɑ�ȵ饹����������p��������ɥ���QɅ������̀��M�������������\n",
"          <div className=\"space-y-6\">\n",
"            <div>\n",
"              <h3 className=\"text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2\"><Lock size={18}/> Cloud vs. Local LLM</h3>\n",
"              <p className=\"text-zinc-400 text-sm leading-relaxed\"><strong className=\"text-zinc-300\">Trade-off:</strong> Using a local LLM ensures 100% data privacy and zero API costs, but requires higher upfront server hardware (GPURAM) and increases inference latency compared to OpenAI APIs. Chosen local to meet strict enterprise privacy constraints.</p>\n",
"            </div>\n",
"            <div>\n",
"              <h3 className=\"text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2\"><GitCommit size={18}/> Chunking Strategy</h3>\n",
"              <p className=\"text-zinc-400 text-sm leading-relaxed\"><strong className=\"text-zinc-300\">Trade-off:</strong> Smaller document chunks yield highly precise vector matches but lose broad context. Larger chunks keep context but risk polluting the LLM prompt window. Optimized via an overlapping sliding-window approach.</p>\n",
"            </div>\n",
"            <div>\n",
"              <h3 className=\"text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2\"><Activity size={18}/> Scalability Considerations</h3>\n",
"              <p className=\"text-zinc-400 text-sm leading-relaxed\">The entire stack is containerized with Docker. The Spring Boot backend is completely stateless, meaning it can scale horizontally behind a load balancer, while Qdrant handles vector sharding inherently.</p>\n",
"            </div>\n",
"          </div>\n",
"        </FadeIn>\n",
"      </div>\n",
"    </div>\n",
"  );\n",
"}\n"];

const defParts = [
"import * as React from 'react';\n",
"import { Link } from 'react-router-dom';\n",
"import { ArrowLeft, Cpu, ShieldCheck, Activity, BrainCircuit } from 'lucide-react';\n",
"import { FadeIn } from '../components/ui/FadeIn';\n",
"import { Badge } from '../components/ui/Badge';\n",
"import { Card } from '../components/ui/Card';\n\n",
"export function ProjectDeficiency() {\n",
"  React.useEffect(() => { window.scrollTo(0, 0); }, []);\n\n",
"  return (\n",
"    <div className=\"mx-auto w-full max-w-4xl px-6 py-24\">\n",
"      <Link to=\"/\" className=\"inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors mb-12\">\n",
"        <ArrowLeft size={16} /> Back to Portfolio\n",
"      </Link>\n",
"      \n",
"      <FadeIn>\n",
"        <h1 className=\"text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-50 mb-6\">Deficiency Detection AI</h1>\n",
"        <p className=\"text-xl text-zinc-400 mb-8 leading-relaxed\">\n",
"          An AI-powered diagnostic tool utilizing Convolutional Neural Networks (CNN) to detect vitamin deficiencies from non-invasive image inputs.\n",
"        </p>\n",
"        <div className=\"flex flex-wrap gap-2 mb-16\">\n",
"          <Badge>Pythoo</Badge><Badge>Deep Learning</Badge><Badge>CNN</Badge><Badge>Flask</Badge><Badge>OpenCV</Badge>\n",
"        </div>\n",
"      </FadeIn>\n\n",
"      <div className=\"space-y-20\">\n",
"        <FadeIn delay={0.1}>\n",
"          <h2 className=\"text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2\">Problem Statement</h2>\n",
"          <p className=\"text-zinc-400 leading-relaxed text-lg\">\n",
"            Traditional blood tests for vitamin deficiencies require clinical infrastructure, are invasive, and can be slow. Physical markers (such as nail ridges or tongue discoloration) often indicate deficiencies early. The goal was to build a computer vision pipeline capable of classifying these markers accurately to provide an accessible, preliminary screening tool.\n",
"          </p>\n",
"        </FadeIn>\n\n",
"        <FadeIn delay={0.2}>\n",
"          <h2 className=\"text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2\">AI Pipeline & Architecture</h2?������\�Ә[YOW�^^�[��MXY[��\�[^YX�M���H�\�[H\�]�YY[��H�؝\�S\[[�H[�H�\��[���X��[������������]��\�Ә[YOW�ܚYY�ܚYX���L��\M�X�M��������\��\�Ә[YOW�M��ܙ\�^�[��N��^�[��NL��������]��\�Ә[YOW��^][\�X�[�\��\L�X�M����Z[��\��Z]�\�Ә[YOW�^^�[��L���^�O^̌KϏ��\�Ә[YOW��۝X��^^�[��LL��[�[�Z[�[��\[[�O�Ϗ�]������[�\�Ә[YOW��X�K^KL�^\�H^^�[��M������O��(�]H[��\�[ۈ[��Y�ܛ�\�]Y�Y[�][ۋ��O�����O��(�%������ɕ�ɽ���ͥ���٥��=���X����ɵ����ѥ����ɕͥ饹���𽱤�q���(���������������������][KX�\���\��Y�X�][ۈ\�[��H�\��H�۝��][ۘ[�]\�[�]�ܚ�
ӓ�H�Z[[�]ۋ��O������[�������\�������\��\�Ә[YOW�M��ܙ\�^�[��N��^�[��NL��������]��\�Ә[YOW��^][\�X�[�\��\L�X�M���H�\�Ә[YOW�^^�[��L���^�O^̌KϏ��\�Ә[YOW��۝X��^^�[��LL���X��[�TH����Ϗ�]������[�\�Ә[YOW��X�K^KL�^\�H^^�[��M������O��(��\���T�TH[�\�][\\�ٛܛKY]H[XY�H\�Yˏ�O�����O��(��[���ۛ�\�[��\�[��H�XHH�YY[�[�ZY�ˏ�O�����O��(�)M=8�ɕ����͔���ɵ��ѥ���ݥѠ������������͍�ɕ̸𽱤�q���(����������������������X[][YHXYۛ��X���\ܝ�[�\�][ۋ��O������[�������\�������]������јYR[��������YR[�[^O^���O�������\�Ә[YOW�^L��۝X��^^�[��LLX�M��ܙ\�X��ܙ\�^�[��N�L���X��X�[�[[��\�	��YK[ٙ���������]��\�Ә[YOW��X�K^KM�������]��������\�Ә[YOW�^[��۝X��^^�[��L�X�L��^][\�X�[�\��\L���X�]�]H�^�O^�NKψ]H��\��]H	�ݙ\��][���ϗ�����\�Ә[YOW�^^�[��M^\�HXY[��\�[^Y����ۙ��\�Ә[YOW�^^�[��L����[[��N����ۙψYYX�[]\�]�\�H��ܚ[�\�H��\��K��Z[�[��HY\�]�ܚ�ۈH�X[]\�]XY���]�\�Hݙ\��][�ˈ��Ϗ��Ϗ��ۙ��\�Ә[YOW�^^�[��L�����][ێ����ۙψH\YYX]�H�[�]X�]H]Y�Y[�][ۈ[�[\[Y[�Y���]^Y\���][�Hӓ����ۙ��\�Ә[YOW�^^�[��L����YK[ٙ�����ۙψ\�[�ܙX\�Y�Z[�[��[YH�YۚY�X�[�H�]�\�H[\�ݙYH[�[	���[�\�[^�][ۈ�[��Y[�[[�ܘ\X�]K��������]������]��������\�Ә[YOW�^[��۝X��^^�[��L�X�L��^][\�X�[�\��\L����Y[�X���^�O^�NKψY�H�ˈ�\��\�[��\�[��O�ϗ�����\�Ә[YOW�^^�[��M^\�HXY[��\�[^Y����ۙ��\�Ә[YOW�^^�[��L����YK[ٙ�����ۙψ�[��[��[��\�[��HۈHY�H�]�\��\��\�����[�[\�ݙ\��]�X�K�][Z]�[�[��\^]K�H���H��ۙ��\�Ә[YOW�^^�[��L����\��\�\�YH[��\�[��H
�\��O���ۙψ�[���܈HX]�Y\�[ܙHX��\�]Hӓ�\��]X�\�H[��[��[^�Y[�[\]\�X��\[��H�YK[ٙ�و�\]Z\�[���X�H�]�ܚ��ۛ�X�]�]K��������]�������]������јYR[��������YR[�[^O^��O�������\�Ә[YOW�^L��۝X��^^�[��LLX�M��ܙ\�X��ܙ\�^�[��N�L����]\�H[\�ݙ[Y[���������[�\�Ә[YOW�\�Y\��\�[�]�YH[MH�X�K^KL�^^�[��MXY[��\�[^YX\��\��^^�[��M�������O���ۙ��\�Ә[YOW�^^�[��L���[�[]X[�^�][ێ����ۙψ�YX�[��H[�[�^�H\�[��X��\]Y\�Z�HS�]X[�^�][ۈ�XܙX\�H�SH\�Y�HۈH�\���\��\���O�����O���ۙ��\�Ә[YOW�^^�[��L���\�[���ۛ�\����\��[�Ώ���ۙψ[\[Y[�[��H\��]Y]YH
K�ˋ�[\�KԙY\�H��HTH�\ۉ�����\�[��[��\�[��H[�\�X]�H�Y��O�����O���ۙ��\�Ә[YOW�^^�[��L���^Z[�X�HRH
RJN����ۙψ[�Yܘ][��ܘYP�SH��]]X]X\����[��^X�H�X�\�وH[XY�HY�H[�[	��XYۛ��\�[�ܙX\�[���[�X�[�\���O������[�����јYR[�������]�������]������
N�����W��N��˝ܚ]Q�[T�[��	�ܘ��Y�\���ڙX��Q˝�	��Y�\�˚��[�	��JN�˝ܚ]Q�[T�[��	�ܘ��Y�\���ڙX�Y�X�Y[��K��	�Y�\�˚��[�	��JN
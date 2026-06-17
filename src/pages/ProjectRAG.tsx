import * as React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, Server, Lock, Activity, GitCommit } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';

export function ProjectRAG() {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

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
          Enterprise Knowledge Retrieval Platform
        </h1>

        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
          Designed and implemented a production-oriented Retrieval-Augmented
          Generation platform capable of transforming unstructured enterprise
          documents into searchable knowledge systems using Spring Boot,
          PostgreSQL, Qdrant, and locally hosted Large Language Models.
        </p>

        <div className="flex flex-wrap gap-2 mb-16">
          <Badge>Java</Badge>
          <Badge>Spring Boot</Badge>
          <Badge>PostgreSQL</Badge>
          <Badge>Qdrant</Badge>
          <Badge>Ollama</Badge>
          <Badge>Docker</Badge>
          <Badge>LangChain4j</Badge>
          <Badge>Vector Search</Badge>
          <Badge>Hybrid Retrieval</Badge>
        </div>
      </FadeIn>

      <div className="space-y-20">

        {/* BUSINESS PROBLEM */}

        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Business Challenge
          </h2>

          <p className="text-zinc-400 leading-relaxed text-lg">
            Large Language Models possess strong reasoning capabilities but have
            no awareness of proprietary organizational knowledge. Enterprises
            require AI systems capable of answering questions using internal
            documentation while maintaining strict data privacy, operational
            control, and auditability.
          </p>

          <p className="text-zinc-400 leading-relaxed text-lg mt-4">
            The objective was to design a fully self-hosted knowledge retrieval
            platform capable of ingesting enterprise documents, building semantic
            search indexes, and generating context-grounded responses without
            relying on external AI providers.
          </p>
        </FadeIn>

        {/* ARCHITECTURE */}

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            System Architecture
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-8">
            The platform separates document ingestion workloads from
            latency-sensitive retrieval workloads, enabling independent scaling,
            operational isolation, and simplified maintenance.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <Card className="p-6 border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4">
                <Database size={20} className="text-zinc-300" />
                <h3 className="font-bold text-zinc-100">
                  Document Ingestion Pipeline
                </h3>
              </div>

              <ul className="space-y-3 text-sm text-zinc-400">
                <li>• SHA-256 document deduplication.</li>
                <li>• PDF and TXT extraction.</li>
                <li>• Unicode normalization and document cleaning.</li>
                <li>• Hierarchical document structuring.</li>
                <li>• Recursive semantic chunking.</li>
                <li>• Batch embedding generation.</li>
                <li>• Vector indexing into Qdrant.</li>
                <li>• Metadata persistence in PostgreSQL.</li>
              </ul>
            </Card>

            <Card className="p-6 border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-3 mb-4">
                <Server size={20} className="text-zinc-300" />
                <h3 className="font-bold text-zinc-100">
                  Retrieval Pipeline
                </h3>
              </div>

              <ul className="space-y-3 text-sm text-zinc-400">
                <li>• Conversation-aware query rewriting.</li>
                <li>• Vector search using Qdrant.</li>
                <li>• Hybrid keyword retrieval.</li>
                <li>• Candidate reranking.</li>
                <li>• Neighbor chunk expansion.</li>
                <li>• Context assembly and deduplication.</li>
                <li>• Token budget management.</li>
                <li>• Grounded answer generation using Ollama.</li>
              </ul>
            </Card>

          </div>
        </FadeIn>

        {/* INGESTION */}

        <FadeIn delay={0.3}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Enterprise Ingestion Pipeline
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-6">
            The ingestion architecture transforms raw enterprise documents into
            structured knowledge assets optimized for semantic retrieval.
          </p>

          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 text-sm text-zinc-300 overflow-x-auto whitespace-pre">
            {`Upload
  ↓
Extraction
  ↓
Cleaning
  ↓
Structuring
  ↓
Recursive Chunking
  ↓
Embedding Generation
  ↓
Vector Indexing
  ↓
Knowledge Base`}
          </div>

          <div className="mt-6 space-y-4 text-zinc-400">
            <p>
              <strong className="text-zinc-200">Document Structuring:</strong>{" "}
              Detects titles, sections, subsections, page references and content
              hierarchy before chunking.
            </p>

            <p>
              <strong className="text-zinc-200">Recursive Chunking:</strong>{" "}
              Instead of fixed-size windows, content is recursively split through
              section, paragraph, sentence and token boundaries to preserve
              semantic integrity.
            </p>

            <p>
              <strong className="text-zinc-200">Embedding Generation:</strong>{" "}
              Chunks are embedded locally using Ollama and nomic-embed-text,
              eliminating dependency on external providers.
            </p>
          </div>
        </FadeIn>

        {/* RETRIEVAL */}

        <FadeIn delay={0.4}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Conversation-Aware Retrieval
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-6">
            Retrieval quality is enhanced through conversational query rewriting,
            hybrid search, reranking, and contextual expansion before generation.
          </p>

          <div className="space-y-4 text-zinc-400">

            <p>
              <strong className="text-zinc-200">Query Rewriting:</strong>{" "}
              Follow-up questions are transformed into standalone retrieval
              queries using conversation history.
            </p>

            <p>
              <strong className="text-zinc-200">Hybrid Retrieval:</strong>{" "}
              Combines vector similarity search from Qdrant with keyword-based
              retrieval from PostgreSQL using Reciprocal Rank Fusion.
            </p>

            <p>
              <strong className="text-zinc-200">Neighbor Expansion:</strong>{" "}
              Adjacent chunks are automatically loaded to recover context lost
              during chunk boundaries.
            </p>

            <p>
              <strong className="text-zinc-200">Context Budgeting:</strong>{" "}
              Retrieved chunks are ordered, deduplicated and trimmed against a
              configurable token budget before prompt construction.
            </p>

          </div>
        </FadeIn>

        {/* DATA ARCHITECTURE */}

        <FadeIn delay={0.5}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Data Architecture
          </h2>

          <p className="text-zinc-400 leading-relaxed mb-4">
            A polyglot persistence architecture was adopted to separate
            transactional workloads from semantic retrieval workloads.
          </p>

          <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-6 font-mono text-sm text-zinc-300 overflow-x-auto whitespace-pre">
            {`PostgreSQL
-----------
documents
document_metadata
chunks
chunks_metadata
ingestion_logs
retrieval_logs

Responsibilities:
- Metadata Storage
- Audit Logging
- Retrieval Analytics
- Re-index Support


Qdrant
-------
Collection: rag_chunks

Payload:
- documentId
- chunkId
- chunkIndex
- sectionTitle
- subsectionTitle
- pageNumber
- documentHash

Responsibilities:
- Vector Search
- Semantic Retrieval
- ANN Similarity Search`}
          </div>
        </FadeIn>

        {/* OBSERVABILITY */}

        <FadeIn delay={0.6}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Observability & Auditability
          </h2>

          <ul className="list-disc list-outside ml-5 space-y-4 text-zinc-400 leading-relaxed marker:text-zinc-600">
            <li>
              Retrieval logs capture intent classification, candidate count,
              retrieval latency, generation latency and rewritten queries.
            </li>

            <li>
              Ingestion logs provide stage-level visibility across structuring,
              metadata generation, chunking, embedding and indexing.
            </li>

            <li>
              Document metadata tracks chunk statistics, processing metrics and
              ingestion performance.
            </li>

            <li>
              Re-indexing APIs allow documents to be reprocessed after model
              upgrades or retrieval strategy changes.
            </li>
          </ul>
        </FadeIn>

        {/* ENGINEERING DECISIONS */}

        <FadeIn delay={0.7}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Engineering Decisions & Trade-offs
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2">
                <Lock size={18} />
                Local LLM vs Cloud APIs
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Local deployment using Ollama and Llama 3.2 was selected to
                ensure complete data privacy, eliminate API costs and maintain
                infrastructure control. The trade-off is increased hardware
                requirements and higher inference latency.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2">
                <GitCommit size={18} />
                Recursive Chunking Strategy
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Fixed-size chunking frequently breaks semantic boundaries. A
                recursive chunking approach preserves sections, paragraphs and
                sentence structure before falling back to token windows,
                improving retrieval precision and answer quality.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2 flex items-center gap-2">
                <Activity size={18} />
                Scalability Considerations
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                The platform is fully containerized with Docker. The Spring Boot
                API layer remains stateless, enabling horizontal scaling behind a
                load balancer, while Qdrant independently manages vector search
                workloads.
              </p>
            </div>

          </div>
        </FadeIn>

        {/* RESULTS */}

        <FadeIn delay={0.8}>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 border-b border-zinc-800 pb-2">
            Results & Impact
          </h2>

          <p className="text-zinc-400 leading-relaxed text-lg">
            Built a production-oriented Enterprise Knowledge Retrieval Platform
            capable of ingesting, structuring, indexing and retrieving
            organizational knowledge through conversational AI interfaces. The
            system combines recursive document chunking, hybrid retrieval,
            conversational query rewriting, reranking, neighbor expansion,
            context budgeting and grounded LLM generation to deliver reliable
            enterprise search experiences while maintaining complete data privacy
            through local model deployment.
          </p>
        </FadeIn>

      </div>
    </div>
  );
}
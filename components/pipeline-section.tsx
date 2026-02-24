"use client"

import {
  GitBranch,
  Hammer,
  FlaskConical,
  Container,
  Rocket,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

const stages = [
  {
    id: "source",
    label: "Source",
    icon: GitBranch,
    description: "Git push triggers webhook. Branch policies enforced via PR review gates.",
    tech: ["GitHub Actions", "Webhooks", "Branch Rules"],
    status: "complete" as const,
  },
  {
    id: "build",
    label: "Build",
    icon: Hammer,
    description: "Multi-stage Docker build with layer caching. Dependencies resolved and compiled.",
    tech: ["Docker", "Buildx", "Turbo"],
    status: "complete" as const,
  },
  {
    id: "test",
    label: "Test",
    icon: FlaskConical,
    description: "Parallel test suites: unit, integration, and E2E. Coverage gates at 80%+.",
    tech: ["Vitest", "Playwright", "Coverage"],
    status: "running" as const,
  },
  {
    id: "containerize",
    label: "Package",
    icon: Container,
    description: "OCI-compliant image pushed to registry. Vulnerability scanning and SBOM generation.",
    tech: ["ECR", "Trivy", "Cosign"],
    status: "pending" as const,
  },
  {
    id: "deploy",
    label: "Deploy",
    icon: Rocket,
    description: "Blue-green deployment to K8s cluster. Health checks and automatic rollback on failure.",
    tech: ["Kubernetes", "ArgoCD", "Helm"],
    status: "pending" as const,
  },
]

function StatusIndicator({ status }: { status: "complete" | "running" | "pending" }) {
  if (status === "complete") {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
        <div className="h-2 w-2 rounded-full bg-primary" />
      </div>
    )
  }
  if (status === "running") {
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary glow-orange-sm" />
      </div>
    )
  }
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted">
      <div className="h-2 w-2 rounded-full bg-muted-foreground/40" />
    </div>
  )
}

export function PipelineSection() {
  const [activeStage, setActiveStage] = useState("test")
  const active = stages.find((s) => s.id === activeStage)

  return (
    <section
      id="pipeline"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 max-w-12 bg-primary/50" />
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              Engineering Thesis
            </span>
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            CI/CD Pipeline Spotlight
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A production-grade delivery pipeline built for speed and reliability.
            Every commit flows through automated quality gates before reaching users.
          </p>
        </div>

        {/* Pipeline flow */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
          {/* Left: Stage cards */}
          <div className="flex flex-1 flex-col gap-3">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              const isActive = activeStage === stage.id
              return (
                <div key={stage.id} className="flex flex-col">
                  <button
                    onClick={() => setActiveStage(stage.id)}
                    className={`group flex items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "glass-strong clay glow-orange-sm"
                        : "hover:bg-surface"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-primary-foreground glow-orange-sm"
                          : "bg-muted text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-semibold transition-colors ${
                            isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          {stage.label}
                        </span>
                        <StatusIndicator status={stage.status} />
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">
                        {stage.tech.join(" / ")}
                      </span>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-0 text-primary opacity-100"
                          : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                      }`}
                    />
                  </button>

                  {/* Connector line */}
                  {index < stages.length - 1 && (
                    <div className="ml-[2.05rem] flex h-3 items-center">
                      <div
                        className={`h-full w-px ${
                          stages[index + 1].status !== "pending"
                            ? "bg-primary/40"
                            : "bg-border"
                        }`}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right: Detail panel */}
          {active && (
            <div className="flex flex-1 items-start lg:pt-0">
              <div className="glass-strong clay w-full rounded-3xl p-8">
                <div className="mb-4 flex items-center gap-3">
                  <active.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">
                    {active.label}
                  </h3>
                  <StatusIndicator status={active.status} />
                </div>

                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {active.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="clay-pressed rounded-xl bg-surface px-3 py-1.5 font-mono text-xs text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Mini progress bar */}
                <div className="mt-6 flex flex-col gap-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Stage Progress</span>
                    <span>
                      {active.status === "complete"
                        ? "100%"
                        : active.status === "running"
                          ? "67%"
                          : "Queued"}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        active.status === "complete"
                          ? "w-full bg-primary"
                          : active.status === "running"
                            ? "w-2/3 bg-primary animate-pulse"
                            : "w-0 bg-muted-foreground"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

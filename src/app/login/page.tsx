"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone, Loader2 } from "lucide-react";
import { Logo } from "@/components/navigation/Logo";
import { Button } from "@/components/ui/Button";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";

  const [method, setMethod] = useState<"email" | "phone">("email");
  const [value, setValue] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendCode = async () => {
    setError("");
    setIsLoading(true);

    // Validate
    if (method === "email" && !value.includes("@")) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (method === "phone" && value.length < 10) {
      setError("Please enter a valid phone number");
      setIsLoading(false);
      return;
    }

    // TODO: Call Supabase auth
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setCodeSent(true);
    setIsLoading(false);
  };

  const handleVerifyCode = async () => {
    setError("");
    setIsLoading(true);

    if (code.length !== 6) {
      setError("Please enter a 6-digit code");
      setIsLoading(false);
      return;
    }

    // TODO: Verify with Supabase
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push(redirect);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="font-editorial text-3xl mb-2">Welcome back</h1>
      <p className="text-muted mb-8">
        {codeSent
          ? `We sent a code to ${value}`
          : "Sign in to access your member dashboard"}
      </p>

      {!codeSent ? (
        <>
          {/* Method Tabs */}
          <div className="flex border border-border rounded-lg p-1 mb-6">
            <button
              onClick={() => setMethod("email")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded text-sm font-medium transition-colors ${
                method === "email"
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <Mail className="w-4 h-4" />
              Email
            </button>
            <button
              onClick={() => setMethod("phone")}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded text-sm font-medium transition-colors ${
                method === "phone"
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <Phone className="w-4 h-4" />
              Phone
            </button>
          </div>

          {/* Input */}
          <input
            type={method === "email" ? "email" : "tel"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={
              method === "email" ? "you@example.com" : "+1 (555) 123-4567"
            }
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground mb-4"
          />

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <Button
            onClick={handleSendCode}
            disabled={isLoading || !value}
            className="w-full"
            size="lg"
          >
            {isLoading ? "Sending..." : "Send Code"}
          </Button>
        </>
      ) : (
        <>
          {/* Code Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Enter verification code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) =>
                setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="000000"
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground text-center text-2xl tracking-[0.5em] font-mono"
              maxLength={6}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <Button
            onClick={handleVerifyCode}
            disabled={isLoading || code.length !== 6}
            className="w-full mb-4"
            size="lg"
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>

          <button
            onClick={() => {
              setCodeSent(false);
              setCode("");
            }}
            className="text-sm text-muted hover:text-foreground w-full text-center"
          >
            Use a different {method}
          </button>
        </>
      )}

      <p className="text-sm text-muted text-center mt-8">
        Not a member yet?{" "}
        <Link href="/apply" className="underline hover:text-foreground">
          Apply to join
        </Link>
      </p>
    </motion.div>
  );
}

function LoginFormFallback() {
  return (
    <div className="flex items-center justify-center py-12">
      <Loader2 className="w-6 h-6 animate-spin text-muted" />
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="p-6">
        <Link href="/">
          <Logo className="h-6" />
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>

          <Suspense fallback={<LoginFormFallback />}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

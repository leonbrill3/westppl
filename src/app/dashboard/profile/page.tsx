"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { useCurrentMember } from "@/lib/hooks/useCurrentMember";
import { CHAPTERS, type Chapter } from "@/types";

export default function ProfilePage() {
  const { member } = useCurrentMember();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [chapter, setChapter] = useState<Chapter>("la");
  const [saved, setSaved] = useState(false);

  // Hydrate the form once the member loads.
  useEffect(() => {
    if (!member) return;
    setName(member.name);
    setEmail(member.email);
    setInstagram(member.instagram ?? "");
    setChapter(member.chapter);
  }, [member]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder. TODO: supabase.from("members").update({...}).eq("id", member.id)
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <DashboardShell title="Profile">
      <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="font-caps text-sm text-muted block mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div>
            <label className="font-caps text-sm text-muted block mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div>
            <label className="font-caps text-sm text-muted block mb-2">
              Instagram
            </label>
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="@username"
              className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
            />
          </div>
          <div>
            <label className="font-caps text-sm text-muted block mb-2">
              Chapter
            </label>
            <select
              value={chapter}
              onChange={(e) => setChapter(e.target.value as Chapter)}
              className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
            >
              {Object.values(CHAPTERS).map((c) => (
                <option key={c.id} value={c.id}>
                  {c.fullName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button type="submit" className="btn-primary">
            Save Changes
          </button>
          {saved && (
            <span className="font-caps text-xs text-pink inline-flex items-center gap-1">
              <Check className="w-4 h-4" /> Saved
            </span>
          )}
        </div>
      </form>
    </DashboardShell>
  );
}

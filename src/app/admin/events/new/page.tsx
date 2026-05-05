"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CHAPTERS, type Chapter, type EventCategory } from "@/types";

const eventSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  date: z.string().min(1, "Date is required"),
  endDate: z.string().optional(),
  location: z.string().min(1, "Location is required"),
  address: z.string().optional(),
  chapter: z.enum(["miami", "la", "nyc"]),
  capacity: z.number().optional(),
  isMembersOnly: z.boolean(),
  isPublic: z.boolean(),
  category: z.enum([
    "party",
    "dinner",
    "wellness",
    "art",
    "music",
    "fashion",
    "networking",
    "other",
  ]),
});

type EventForm = z.infer<typeof eventSchema>;

const categories: { value: EventCategory; label: string }[] = [
  { value: "party", label: "Party" },
  { value: "dinner", label: "Dinner" },
  { value: "wellness", label: "Wellness" },
  { value: "art", label: "Art" },
  { value: "music", label: "Music" },
  { value: "fashion", label: "Fashion" },
  { value: "networking", label: "Networking" },
  { value: "other", label: "Other" },
];

export default function NewEventPage() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<EventForm>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      isMembersOnly: true,
      isPublic: false,
      chapter: "miami",
      category: "party",
    },
  });

  const selectedChapter = watch("chapter");

  const onSubmit = async (data: EventForm) => {
    console.log("Creating event:", data);
    // TODO: Submit to API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/admin/events");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl">
      <Link
        href="/admin/events"
        className="inline-flex items-center text-sm text-muted hover:text-foreground mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Events
      </Link>

      <h1 className="font-editorial text-3xl mb-8">Create Event</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-2">Event Image</label>
          {imagePreview ? (
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setImagePreview(null)}
                className="absolute top-2 right-2 p-1 bg-black/50 rounded-full hover:bg-black/70"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center aspect-video border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-foreground transition-colors">
              <Upload className="w-8 h-8 text-muted mb-2" />
              <span className="text-sm text-muted">Click to upload</span>
              <span className="text-xs text-muted mt-1">
                PNG, JPG up to 10MB
              </span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>

        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Event Title *
          </label>
          <input
            id="title"
            type="text"
            {...register("title")}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
            placeholder="e.g., Sunset Rooftop Session"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-2">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Description *
          </label>
          <textarea
            id="description"
            {...register("description")}
            rows={5}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
            placeholder="Describe your event..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-2">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Date & Time */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-2">
              Start Date & Time *
            </label>
            <input
              id="date"
              type="datetime-local"
              {...register("date")}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-2">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium mb-2">
              End Date & Time
            </label>
            <input
              id="endDate"
              type="datetime-local"
              {...register("endDate")}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
            />
          </div>
        </div>

        {/* Location */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-2">
              Venue Name *
            </label>
            <input
              id="location"
              type="text"
              {...register("location")}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
              placeholder="e.g., The Setai"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-2">
                {errors.location.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-2">
              Address
            </label>
            <input
              id="address"
              type="text"
              {...register("address")}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
              placeholder="Full address"
            />
          </div>
        </div>

        {/* Chapter & Category */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Chapter *</label>
            <div className="grid grid-cols-3 gap-2">
              {Object.values(CHAPTERS).map((chapter) => (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => setValue("chapter", chapter.id as Chapter)}
                  className={`p-3 border rounded-lg text-sm font-medium transition-all ${
                    selectedChapter === chapter.id
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {chapter.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              Category *
            </label>
            <select
              id="category"
              {...register("category")}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Capacity */}
        <div>
          <label htmlFor="capacity" className="block text-sm font-medium mb-2">
            Capacity
          </label>
          <input
            id="capacity"
            type="number"
            {...register("capacity", { valueAsNumber: true })}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
            placeholder="Leave empty for unlimited"
          />
        </div>

        {/* Visibility */}
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("isMembersOnly")}
              className="w-4 h-4 rounded border-border"
            />
            <span className="text-sm">Members only event</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("isPublic")}
              className="w-4 h-4 rounded border-border"
            />
            <span className="text-sm">Show on public events page</span>
          </label>
        </div>

        {/* Submit */}
        <div className="flex gap-4 pt-4">
          <Button type="submit" disabled={isSubmitting} size="lg">
            {isSubmitting ? "Creating..." : "Create Event"}
          </Button>
          <Link href="/admin/events">
            <Button type="button" variant="outline" size="lg">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

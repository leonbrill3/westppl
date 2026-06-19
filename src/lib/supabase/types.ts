export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      members: {
        Row: {
          id: string;
          email: string;
          phone: string | null;
          name: string;
          chapter: "miami" | "la" | "nyc";
          status: "pending" | "active" | "suspended";
          card_number: string | null;
          instagram: string | null;
          avatar_url: string | null;
          is_admin: boolean;
          joined_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          phone?: string | null;
          name: string;
          chapter: "miami" | "la" | "nyc";
          status?: "pending" | "active" | "suspended";
          card_number?: string | null;
          instagram?: string | null;
          avatar_url?: string | null;
          is_admin?: boolean;
          joined_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          phone?: string | null;
          name?: string;
          chapter?: "miami" | "la" | "nyc";
          status?: "pending" | "active" | "suspended";
          card_number?: string | null;
          instagram?: string | null;
          avatar_url?: string | null;
          is_admin?: boolean;
          joined_at?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      events: {
        Row: {
          id: string;
          title: string;
          description: string;
          date: string;
          end_date: string | null;
          location: string;
          address: string | null;
          chapter: "miami" | "la" | "nyc";
          capacity: number | null;
          is_members_only: boolean;
          is_public: boolean;
          image_url: string | null;
          category: "party" | "dinner" | "wellness" | "art" | "music" | "fashion" | "networking" | "other";
          created_by: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          date: string;
          end_date?: string | null;
          location: string;
          address?: string | null;
          chapter: "miami" | "la" | "nyc";
          capacity?: number | null;
          is_members_only?: boolean;
          is_public?: boolean;
          image_url?: string | null;
          category: "party" | "dinner" | "wellness" | "art" | "music" | "fashion" | "networking" | "other";
          created_by: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          date?: string;
          end_date?: string | null;
          location?: string;
          address?: string | null;
          chapter?: "miami" | "la" | "nyc";
          capacity?: number | null;
          is_members_only?: boolean;
          is_public?: boolean;
          image_url?: string | null;
          category?: "party" | "dinner" | "wellness" | "art" | "music" | "fashion" | "networking" | "other";
          created_by?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      rsvps: {
        Row: {
          id: string;
          event_id: string;
          member_id: string;
          status: "confirmed" | "waitlist" | "cancelled";
          plus_one: boolean;
          plus_one_name: string | null;
          checked_in_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          event_id: string;
          member_id: string;
          status?: "confirmed" | "waitlist" | "cancelled";
          plus_one?: boolean;
          plus_one_name?: string | null;
          checked_in_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          event_id?: string;
          member_id?: string;
          status?: "confirmed" | "waitlist" | "cancelled";
          plus_one?: boolean;
          plus_one_name?: string | null;
          checked_in_at?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      applications: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string;
          chapter: "miami" | "la" | "nyc";
          instagram: string | null;
          referral: string | null;
          why: string;
          industry: string | null;
          title: string | null;
          company: string | null;
          contribution: string | null;
          status: "pending" | "approved" | "rejected";
          reviewed_by: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          phone: string;
          chapter: "miami" | "la" | "nyc";
          instagram?: string | null;
          referral?: string | null;
          why: string;
          industry?: string | null;
          title?: string | null;
          company?: string | null;
          contribution?: string | null;
          status?: "pending" | "approved" | "rejected";
          reviewed_by?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          phone?: string;
          chapter?: "miami" | "la" | "nyc";
          instagram?: string | null;
          referral?: string | null;
          why?: string;
          industry?: string | null;
          title?: string | null;
          company?: string | null;
          contribution?: string | null;
          status?: "pending" | "approved" | "rejected";
          reviewed_by?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      articles: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          category: "events" | "culture" | "west-nights" | "lifestyle" | "interviews";
          image_url: string | null;
          author_id: string | null;
          published_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          category: "events" | "culture" | "west-nights" | "lifestyle" | "interviews";
          image_url?: string | null;
          author_id?: string | null;
          published_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          excerpt?: string;
          content?: string;
          category?: "events" | "culture" | "west-nights" | "lifestyle" | "interviews";
          image_url?: string | null;
          author_id?: string | null;
          published_at?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      chapter: "miami" | "la" | "nyc";
      member_status: "pending" | "active" | "suspended";
      rsvp_status: "confirmed" | "waitlist" | "cancelled";
      application_status: "pending" | "approved" | "rejected";
      event_category: "party" | "dinner" | "wellness" | "art" | "music" | "fashion" | "networking" | "other";
      article_category: "events" | "culture" | "west-nights" | "lifestyle" | "interviews";
    };
  };
};

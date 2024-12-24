interface MemoItemProps {
  id: string;
  content: string;
  tags: string[];
  createdAt: string;
}

export function MemoItem({ content, tags, createdAt }: MemoItemProps) {
  return (
    <div className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
      <p className="whitespace-pre-wrap">{content}</p>
      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      <time className="text-xs text-muted-foreground mt-2 block">
        {new Date(createdAt).toLocaleString()}
      </time>
    </div>
  );
}

function PostCard({ category, title, date, author, description }) {
  return (
    <div className="group border rounded-lg p-5 hover:bg-muted/30 transition-colors duration-300">
      <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
        {category}
      </p>
      <h3 className="text-base font-semibold tracking-tight mt-2 mb-2 leading-snug group-hover:underline underline-offset-2">
        {title}
      </h3>
      <p className="text-[13px] text-muted-foreground leading-relaxed">
        {description}
      </p>
      <div className="flex items-center gap-2 mt-3 text-[11px] text-muted-foreground">
        <span className="font-medium text-foreground">{author}</span>
        <span>·</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default PostCard;

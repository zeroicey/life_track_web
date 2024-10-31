import MemoGroupClient from "./client";

interface PageProps {
  params: Promise<{
    group_id: string;
  }>;
}

export default async function MemoGroup({ params }: PageProps) {
  const { group_id } = await params;
  return <MemoGroupClient groupId={group_id} />;
}

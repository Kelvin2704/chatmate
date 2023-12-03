import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const params = useParams();

  const conservationId = useMemo(() => {
    if (!params?.conservationId) {
      return "";
    }

    return params.conservationId as string;
  }, [params?.conservationId]);

  const isOpen = useMemo(() => !!conservationId, [conservationId]);
  // !! is turn conversationId from string to boolean
  return useMemo(
    () => ({
      isOpen,
      conservationId,
    }),
    [isOpen, conservationId]
  );
};

export default useConversation;

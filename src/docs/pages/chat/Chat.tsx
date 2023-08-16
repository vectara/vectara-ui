import { useState } from "react";
import { ChatTurn, VuiChat } from "../../../lib";

const introdution =
  "I know everything about lobsters. Their environments, lifecycle, likes, dislikes, hobbies... really, ask me anything about lobsters!";

const responses = [
  "I don't know that yet, but I'm learning!",
  "Ha ha ha, well, you got me there. I don't know THAT but maybe you can ask me something else?",
  "Well, let's get serious. Who would know that? I'm not an encyclopedia, you know.",
  "I'm not sure I know that. I'm still learning about lobsters. And boy oh boy, do I know a lot about them! Ask me something else, go on, try me.",
  "Hm, you got me there.",
  "Guess I got a little overconfident after learning so much about lobsters. I can't answer that, but I can answer a lot of other questions about lobsters. Ask me something else! About lobsters."
];

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState<ChatTurn[]>([]);

  const handleUserInput = (input: string) => {
    const turn: ChatTurn = {
      question: input,
      isLoading: true,
      answer: responses[Math.floor(Math.random() * responses.length)],
      query: "This is a placeholder query",
      results: []
    };

    const index = conversation.length;
    setConversation([...conversation, turn]);

    setTimeout(() => {
      setConversation((prev) => {
        prev[index].isLoading = false;
        return [...prev];
      });
    }, 2500);
  };

  return (
    <>
      Look at the bottom right corner of the window.
      <VuiChat
        openPrompt="Discuss lobsters"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        introdution={introdution}
        onInput={handleUserInput}
        conversation={conversation}
      />
    </>
  );
};

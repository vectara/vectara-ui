import { useState } from "react";
import { ChatTurn, VuiChat, VuiSpacer, VuiToggle } from "../../../lib";

const introduction =
  "I know everything about lobsters. Their environments, lifecycle, likes, dislikes, hobbies... really, ask me anything about lobsters!";

const responses = [
  "I don't know that yet, but I'm learning!",
  "Ha ha ha, well, you got me there. I don't know THAT but maybe you can ask me something else?",
  "Well, let's get serious. Who would know that? I'm not a lobster encyclopedia, you know.",
  "I'm not sure I know that. I'm still learning about lobsters. And boy oh boy, do I know a lot about them! Ask me something else, go on, try me.",
  "Hm, you got me there.",
  "Guess I got a little overconfident after learning so much about lobsters. I can't answer that, but I can answer a lot of other questions about lobsters. Ask me something else! About lobsters."
];

const searchResult = {
  title: "Placeholder search result",
  url: "http://vectara.com/",
  date: "May 27, 2023",
  snippet: {
    pre: "When a lobster celebrates its birthday, it will ",
    text: "wear a hat",
    post: " and eat a cake."
  }
};

const suggestions = ["What do lobsters eat?", "How long do lobsters live?", "How big do lobsters get?"];

export const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState<ChatTurn[]>([]);
  const [isInspectionEnabled, setIsInspectionEnabled] = useState(true);
  const [isSuggestionsEnabled, setIsSuggestionsEnabled] = useState(true);

  const handleUserInput = (input: string) => {
    const turn: ChatTurn =
      Math.random() > 0.4
        ? {
            question: input,
            isLoading: true,
            query: "This is a placeholder query",
            answer: responses[Math.floor(Math.random() * responses.length)],
            results: [searchResult, searchResult, searchResult, searchResult, searchResult]
          }
        : {
            question: input,
            isLoading: true,
            query: "This is a placeholder query",
            error: {
              message: "There was a problem with the server"
            }
          };

    const index = conversation.length;
    setConversation([...conversation, turn]);

    setTimeout(() => {
      setConversation((prev) => {
        if (prev[index]) {
          prev[index].isLoading = false;
        }
        return [...prev];
      });
    }, 2500);
  };

  const handleRetry = (turn: ChatTurn) => {
    setConversation((prev) => {
      const index = prev.indexOf(turn);
      prev[index].isLoading = true;
      return [...prev];
    });

    setTimeout(() => {
      setConversation((prev) => {
        const index = prev.indexOf(turn);
        if (prev[index]) {
          prev[index] = {
            ...prev[index],
            error: undefined,
            isLoading: false,
            answer: responses[Math.floor(Math.random() * responses.length)],
            results: [searchResult, searchResult, searchResult, searchResult, searchResult]
          };
        }

        return [...prev];
      });
    }, 2500);
  };

  return (
    <>
      <p>Look at the bottom right corner of the window.</p>

      <VuiSpacer size="s" />

      <VuiToggle
        label="Enable inspection"
        checked={isInspectionEnabled}
        onChange={(e) => setIsInspectionEnabled(e.target.checked)}
      />

      <VuiSpacer size="s" />

      <VuiToggle
        label="Enable suggestions"
        checked={isSuggestionsEnabled}
        onChange={(e) => setIsSuggestionsEnabled(e.target.checked)}
      />

      <VuiChat
        openPrompt="Discuss lobsters"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        introduction={introduction}
        onInput={handleUserInput}
        onRetry={handleRetry}
        onReset={() => setConversation([])}
        conversation={conversation}
        isInspectionEnabled={isInspectionEnabled}
        suggestions={isSuggestionsEnabled ? suggestions : undefined}
      />
    </>
  );
};

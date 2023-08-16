import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { BiChat, BiX } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { VuiIconButton } from "../button/IconButton";
import { VuiTextInput } from "../form";
import { ChatTurn } from "./types";

type Props = {
  openPrompt: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  introdution?: string;
  onInput: (input: string) => void;
  conversation: ChatTurn[];
};

export const VuiChat = ({ openPrompt, isOpen, setIsOpen, introdution, onInput, conversation }: Props) => {
  const [input, setInput] = useState("");
  const conversationRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Scroll to the bottom of the chat to keep the latest turn in view.
      conversationRef.current?.scrollTo({
        left: 0,
        top: conversationRef.current?.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [conversation]);

  const buttonClasses = classNames("vuiChatButton", {
    "vuiChatButton-isHidden": isOpen
  });

  const classes = classNames("vuiChat", {
    "vuiChat-isHidden": !isOpen
  });

  return (
    <>
      <button className={buttonClasses} onClick={() => setIsOpen(true)}>
        <VuiFlexContainer alignItems="center" spacing="s">
          <VuiFlexItem shrink={false} grow={false}>
            <VuiIcon size="s">
              <BiChat />
            </VuiIcon>
          </VuiFlexItem>

          <VuiFlexItem grow={1}>
            <div className="vuiChatButton__prompt">{openPrompt}</div>
          </VuiFlexItem>
        </VuiFlexContainer>
      </button>

      <div className={classes}>
        <div className="vuiChat__header">
          <VuiFlexContainer alignItems="center" spacing="s">
            <VuiFlexItem shrink={false} grow={false}>
              <VuiIcon size="s">
                <BiChat />
              </VuiIcon>
            </VuiFlexItem>

            <VuiFlexItem grow={1}>
              <div className="vuiChatButton__prompt">{openPrompt}</div>
            </VuiFlexItem>

            <VuiFlexItem shrink={false} grow={false}>
              <VuiIconButton
                icon={
                  <VuiIcon>
                    <BiX />
                  </VuiIcon>
                }
                color="neutral"
                onClick={() => setIsOpen(false)}
              />
            </VuiFlexItem>
          </VuiFlexContainer>
        </div>

        <div className="vuiChat__conversation" ref={conversationRef}>
          <div className="vuiChat__turn">{introdution}</div>

          {conversation.map((turn, index) => (
            <div key={index} className="vuiChat__turn">
              <div className="vuiChat__question">{turn.question}</div>
              <div className="vuiChat__answer">{turn.answer}</div>
            </div>
          ))}
        </div>

        <div className="vuiChat__input">
          <VuiTextInput
            value={input}
            onChange={(e) => {
              setInput(e.currentTarget.value);
            }}
            onSubmit={() => {
              onInput(input);
              setInput("");
            }}
            fullWidth
          />
        </div>
      </div>
    </>
  );
};
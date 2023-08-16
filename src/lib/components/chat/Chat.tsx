import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { BiChat, BiPaperPlane, BiX } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { VuiIconButton } from "../button/IconButton";
import { VuiTextInput } from "../form";
import { ChatTurn } from "./types";
import { VuiSpinner } from "../spinner/Spinner";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { VuiButtonSecondary } from "../button/ButtonSecondary";

type Props = {
  openPrompt: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  introdution?: string;
  onInput: (input: string) => void;
  onReset: () => void;
  conversation: ChatTurn[];
};

export const VuiChat = ({ openPrompt, isOpen, setIsOpen, introdution, onInput, onReset, conversation }: Props) => {
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

  const onSubmit = () => {
    onInput(input);
    setInput("");
  };

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

            <VuiFlexItem>
              <VuiButtonSecondary color="neutral" size="xs" onClick={onReset}>
                Start over
              </VuiButtonSecondary>
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
              <div className="vuiChat__answer">
                {turn.isLoading ? (
                  <VuiFlexContainer alignItems="center" spacing="xs">
                    <VuiFlexItem grow={false}>
                      <VuiSpinner size="xs" />
                    </VuiFlexItem>

                    <VuiFlexItem grow={false}>
                      <VuiText>
                        <p>
                          <VuiTextColor color="subdued">Thinking…</VuiTextColor>
                        </p>
                      </VuiText>
                    </VuiFlexItem>
                  </VuiFlexContainer>
                ) : (
                  turn.answer
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="vuiChat__input">
          <VuiFlexContainer alignItems="center" spacing="xxs">
            <VuiFlexItem grow={1}>
              <VuiTextInput
                value={input}
                onChange={(e) => {
                  setInput(e.currentTarget.value);
                }}
                onSubmit={onSubmit}
                fullWidth
              />
            </VuiFlexItem>

            <VuiFlexItem shrink={false} grow={false}>
              <VuiIconButton
                icon={
                  <VuiIcon>
                    <BiPaperPlane />
                  </VuiIcon>
                }
                color="primary"
                onClick={onSubmit}
              />
            </VuiFlexItem>
          </VuiFlexContainer>
        </div>
      </div>
    </>
  );
};

import { useEffect, useRef, useState } from "react";
import { BiChat, BiPaperPlane, BiX } from "react-icons/bi";
import classNames from "classnames";
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
  const [isTouched, setIsTouched] = useState(false);
  const [input, setInput] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const conversationRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  useEffect(() => {
    // Only autofocus if the user has interacted with the component.
    // This prevents the component stealing focus when it first mounts.
    if (isTouched) {
      if (isOpen) {
        inputRef.current?.focus();
      } else {
        buttonRef.current?.focus();
      }
    }
  }, [isOpen]);

  const onSubmit = () => {
    if (!input?.trim()) return;
    onInput(input);
    setInput("");
  };

  const onOpen = () => {
    setIsTouched(true);
    setIsOpen(true);
  };

  const onClose = () => {
    setIsTouched(true);
    setIsOpen(false);
  };

  const buttonClasses = classNames("vuiChatButton", {
    "vuiChatButton-isHidden": isOpen
  });

  const classes = classNames("vuiChat", {
    "vuiChat-isHidden": !isOpen
  });

  return (
    <>
      {/* @ts-expect-error React doesn't support inert yet */}
      <button className={buttonClasses} inert={isOpen} onClick={onOpen} ref={buttonRef}>
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

      <div
        // @ts-expect-error React doesn't support inert yet
        inert={!isOpen}
        className={classes}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
        }}
      >
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
                onClick={onClose}
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
                ref={inputRef}
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

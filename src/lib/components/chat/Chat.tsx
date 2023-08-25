import { useEffect, useRef, useState } from "react";
import { BiChat, BiExitFullscreen, BiFullscreen, BiPaperPlane, BiX } from "react-icons/bi";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { VuiIconButton } from "../button/IconButton";
import { VuiTextInput } from "../form";
import { ChatTurn } from "./types";
import { VuiButtonSecondary } from "../button/ButtonSecondary";
import { VuiChatInspectionModal } from "./ChatInspectionModal";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiButtonTertiary } from "../button/ButtonTertiary";
import { VuiChatTurn } from "./ChatTurn";

type Props = {
  openPrompt: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  introduction?: string;
  suggestions?: string[];
  onInput: (input: string) => void;
  onRetry: (trun: ChatTurn) => void;
  onReset: () => void;
  conversation: ChatTurn[];
  isInspectionEnabled?: boolean;
  initialIsFullScreen?: boolean;
};

export const VuiChat = ({
  openPrompt,
  isOpen,
  setIsOpen,
  introduction,
  suggestions,
  onInput,
  onRetry,
  onReset,
  conversation,
  isInspectionEnabled,
  initialIsFullScreen = false
}: Props) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(initialIsFullScreen);
  const [input, setInput] = useState("");
  const [inspectedTurn, setInspectedTurn] = useState<ChatTurn>();
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
    "vuiChat-isHidden": !isOpen,
    "vuiChat-isFullScreen": isFullScreen
  });

  return (
    <>
      {/* @ts-expect-error React doesn't support inert yet */}
      <button className={buttonClasses} inert={isOpen ? "" : null} onClick={onOpen} ref={buttonRef}>
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
        inert={!isOpen ? "" : null}
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

            <VuiFlexItem shrink={false} grow={false}>
              <VuiFlexContainer alignItems="center" spacing="xxs">
                <VuiFlexItem shrink={false} grow={false}>
                  <VuiIconButton
                    icon={<VuiIcon>{isFullScreen ? <BiExitFullscreen /> : <BiFullscreen />}</VuiIcon>}
                    color="neutral"
                    onClick={() => setIsFullScreen(!isFullScreen)}
                  />
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
            </VuiFlexItem>
          </VuiFlexContainer>
        </div>

        <div className="vuiChat__conversation" ref={conversationRef}>
          {(introduction || suggestions) && (
            <div className="vuiChat__introduction">
              {introduction}
              {introduction && <VuiSpacer size="s" />}
              {suggestions?.map((suggestion) => (
                <VuiButtonTertiary
                  size="s"
                  color="primary"
                  key={suggestion}
                  onClick={() => onInput(suggestion)}
                  noPadding
                >
                  {suggestion}
                </VuiButtonTertiary>
              ))}
              {suggestions && suggestions.length > 0 && <VuiSpacer size="s" />}
            </div>
          )}

          {conversation.length > 0 && (
            <div className="vuiChat__turns">
              {conversation.map((turn, index) => (
                <VuiChatTurn
                  turn={turn}
                  isInspectionEnabled={isInspectionEnabled}
                  setInspectedTurn={setInspectedTurn}
                  onRetry={onRetry}
                  key={index}
                />
              ))}
            </div>
          )}

          {conversation.length > 0 && (
            <div className="vuiChat__conversationActions">
              <VuiFlexContainer alignItems="center" justifyContent="center">
                <VuiFlexItem>
                  <VuiButtonSecondary color="neutral" size="xs" onClick={onReset}>
                    Start over
                  </VuiButtonSecondary>
                </VuiFlexItem>
              </VuiFlexContainer>
            </div>
          )}
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

      <VuiChatInspectionModal
        isOpen={Boolean(inspectedTurn)}
        turn={inspectedTurn}
        onClose={() => setInspectedTurn(undefined)}
      />
    </>
  );
};

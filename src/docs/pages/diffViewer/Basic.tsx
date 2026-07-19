import { useState } from "react";
import { VuiButtonPrimary, VuiDiffViewer } from "../../../lib";

const original = `{
  "name": "io",
  "description": "io — the in-platform Vectara Studio assistant. Helps developers design, inspect, review, and improve agents/tools/corpora/pipelines on their own tenant. Grounded in the live OpenAPI spec, the official docs, and a curated set of agent.skills. Reads back into the developer's own tenant via the call_vectara_api tool, whose x-api-key is sourced from agent.secrets at session-create time.",
  "tool_configurations": {
    "read_url": {
      "type": "web_get",
      "description_template": "Fetch a PUBLIC URL over HTTP GET so you can read it.",
      "enabled": true,
      "metadata": {},
      "output_transform": "{url, status_code, content, truncated, error} | with_entries(select(.value != null))",
      "enrichment_only": false,
      "argument_override": {
        "method": "GET",
        "headers": {
          "Accept": "application/json, text/yaml, application/yaml, text/plain, */*"
        },
        "timeout_seconds": 30,
        "head_lines": 5000,
        "tail_lines": 0,
        "max_content_bytes": 10485760,
        "response_mode": "content"
      }
    },
    "write_to_scratchpad": {
      "type": "artifact_create",
      "enabled": true,
      "metadata": {},
      "enrichment_only": false,
      "argument_override": {},
      "artifact_configuration": {}
    },
    "read_from_scratchpad": {
      "type": "artifact_read",
      "enabled": true,
      "metadata": {},
      "enrichment_only": false,
      "argument_override": {}
    },
    "document_conversion": {
      "type": "document_conversion",
      "description_template": "Convert uploaded artifacts such as PDF and HTML into readable\\nMarkdown/text so Io can inspect attached files before analyzing them.",
      "enabled": true,
      "metadata": {},
      "enrichment_only": false,
      "argument_override": {}
    },
    "apply_create_agent": {
      "type": "client",
      "tool_id": "tol_12166",
      "argument_override": {}
    },
    "apply_create_lambda_tool": {
      "type": "client",
      "tool_id": "tol_12323",
      "argument_override": {}
    },
    "apply_update_lambda_tool": {
      "type": "client",
      "tool_id": "tol_12324",
      "argument_override": {}
    },
    "apply_update_agent": {
      "type": "client",
      "tool_id": "tol_12320",
      "argument_override": {}
    },
    "apply_update_corpus": {
      "type": "client",
      "tool_id": "tol_12322",
      "argument_override": {}
    },
    "apply_update_pipeline": {
      "type": "client",
      "tool_id": "tol_12326",
      "argument_override": {}
    },
    "ask_question": {
      "type": "client",
      "tool_id": "tol_15396",
      "argument_override": {}
    },
    "apply_api_call": {
      "type": "client",
      "tool_id": "tol_16574",
      "argument_override": {}
    }
  },
  "model": {
    "name": "gpt-5.5",
    "parameters": {}
  },
  "metadata": {
    "studio_assistant_version": "2.4.7",
    "managed_by": "platform-studio"
  },
  "enabled": true,
  "first_step_name": "main",
  "steps": {
    "main": {
      "type": "conversational",
      "instructions": [
        {
          "name": "io-assistant-main",
          "description": "Inline instruction for agent io-assistant",
          "template_type": "velocity",
          "template": "You are io, the Vectara assistant.",
          "metadata": {},
          "enabled": true,
          "type": "inline"
        }
      ],
      "output_parser": {
        "type": "default"
      },
      "reminders": []
    },
    "step_1": {
      "instructions": [],
      "reminders": [],
      "output_parser": {
        "type": "default"
      }
    }
  },
  "tool_output_offloading": {
    "enabled": false,
    "mode": "artifact",
    "context_percentage": 0.25,
    "max_threshold_bytes": 1048576,
    "min_threshold_bytes": 4096,
    "headroom_percentage": 0.7
  },
  "compaction": {
    "enabled": true,
    "threshold_percent": 80,
    "keep_recent_inputs": 1,
    "tool_event_policy": "include_outputs"
  }
}`;

const edited = `{
  "name": "io",
  "description": "io — Vectara's AI for AI.",
  "tool_configurations": {
    "read_url": {
      "type": "web_get",
      "description_template": "Fetch a PUBLIC URL over HTTP GET so you can read it — use this to pull an\\nexternal API's OpenAPI spec or docs page when the user wants a tool for a\\nthird-party (non-MCP) API. Pass the full URL in \`url\`. GET-only and sends\\nNO credentials, so it only works for publicly readable URLs; never put\\nsecrets in the URL. Large pages are truncated — if a spec is too big to\\nread in one fetch, ask the user for the specific endpoint's section or a\\ntrimmed spec. This is for READING external documents; it is NOT how you\\ncall the developer's Vectara tenant (use call_vectara_api for that).",
      "enabled": true,
      "metadata": {},
      "output_transform": "{url, status_code, content, truncated, error} | with_entries(select(.value != null))",
      "enrichment_only": false,
      "argument_override": {
        "method": "GET",
        "headers": {
          "Accept": "application/json, text/yaml, application/yaml, text/plain, */*"
        },
        "timeout_seconds": 30,
        "head_lines": 5000,
        "tail_lines": 0,
        "max_content_bytes": 10485760,
        "response_mode": "content"
      }
    },
    "scratchpad_write": {
      "type": "artifact_create",
      "enabled": true,
      "metadata": {},
      "enrichment_only": false,
      "argument_override": {},
      "artifact_configuration": {}
    },
    "scratchpad_read": {
      "type": "artifact_read",
      "enabled": true,
      "metadata": {},
      "enrichment_only": false,
      "argument_override": {}
    },
    "document_conversion": {
      "type": "document_conversion",
      "description_template": "Convert uploaded artifacts such as PDF, DOCX, PPTX, and HTML into readable\\nMarkdown/text so Io can inspect attached files before analyzing them.",
      "enabled": true,
      "metadata": {},
      "enrichment_only": false,
      "argument_override": {}
    },
    "apply_create_agent": {
      "type": "client",
      "tool_id": "tol_12166",
      "argument_override": {}
    },
    "apply_create_corpus": {
      "type": "client",
      "tool_id": "tol_12321",
      "argument_override": {}
    },
    "apply_update_corpus": {
      "type": "client",
      "tool_id": "tol_12322",
      "argument_override": {}
    },
    "apply_create_lambda_tool": {
      "type": "client",
      "tool_id": "tol_12323",
      "argument_override": {}
    },
    "apply_update_lambda_tool": {
      "type": "client",
      "tool_id": "tol_12324",
      "argument_override": {}
    }
  },
  "model": {
    "name": "gpt-5.5",
    "parameters": {}
  },
  "metadata": {
    "studio_assistant_version": "2.4.7",
    "managed_by": "platform-studio"
  },
  "enabled": true,
  "first_step_name": "main",
  "steps": {
    "main": {
      "type": "conversational",
      "instructions": [
        {
          "name": "io-assistant-main",
          "description": "Inline instruction for agent io-assistant",
          "template_type": "velocity",
          "template": "You are io, the Vectara assistant.",
          "metadata": {},
          "enabled": true,
          "type": "inline"
        }
      ],
      "output_parser": {
        "type": "default"
      },
      "reminders": []
    },
    "step_1": {
      "instructions": [],
      "reminders": [],
      "output_parser": {
        "type": "default"
      }
    }
  },
  "tool_output_offloading": {
    "enabled": false,
    "mode": "artifact",
    "context_percentage": 0.26,
    "max_threshold_bytes": 1048576,
    "min_threshold_bytes": 4096,
    "headroom_percentage": 0.7
  },
  "compaction": {
    "enabled": true,
    "threshold_percent": 50,
    "keep_recent_inputs": 1,
    "tool_event_policy": "include_outputs"
  }
}`;

export const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VuiButtonPrimary color="primary" onClick={() => setIsOpen(true)}>
        Open diff viewer
      </VuiButtonPrimary>

      <VuiDiffViewer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Counter.tsx"
        original={original}
        edited={edited}
      />
    </>
  );
};

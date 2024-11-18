import { VuiCode } from "../../../lib";

export const FullHeight = () => (
  <VuiCode language="tsx" fullHeight>
    {`
curl -X POST \
-H "customer-id: 2219234556" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer eyJraWQiOiJqUENhYmhHTndTTlBOdFE1bXh6NWQxOFV2a0xyQVc3aEZsS3N2dU9qcDNVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI1ODAxMzNlMC05MDIxLTcwNzgtMThiNC03MjkwNmYxNDEwYWMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfYjlwMnUza2RHIiwiY29nbml0bzp1c2VybmFtZSI6ImNqK2F1ZzFAdmVjdGFyYS5jb20iLCJvcmlnaW5fanRpIjoiOWU5MDhmMmMtMTJlYy00NTEyLWFjMTEtOGNhYjI1YTlkNjM2IiwiYXVkIjoiNG0zdDBnc3MyZnJ0cTRodTc0YmMxNmVjN3IiLCJldmVudF9pZCI6IjFlZWIzZWQ5LTA1NzctNDg5YS05YWIwLTdhNGQ3YmIxMWRiYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzIwNzM0MDEzLCJleHAiOjE3MjA3NjM0OTksImlhdCI6MTcyMDc1OTg5OSwianRpIjoiYmE0ZGMzYWQtNGU0Mi00NTJhLTg4NmMtNWVhYzIzM2Y2ODA0IiwiZW1haWwiOiJjaithdWcxQHZlY3RhcmEuY29tIn0.oyXW3uLvjaphK6-xXonHeU3OlK6FVdOEK3mNtb9EuLyS1d6HfO1fP0tvHYPzPOmg5tmdKGdHajmMxkehVN4kwRslYTQLRzBWiZgs1LcMPU9HbZ8_YUAu97MT_KW8erEIy9lRYIP3jAWBb7DN_At1NLri4pxXAvEFLNbgsmgjAJCmkVxM4MrKUC37lAR_f_prjb38LFZYNdkP_851UGWYblc2DNiIhGomIrCMVxrHDf5OTlH03sJwQoreFzdI9-W_izdfcCEayKZEDMjkOf9g-8uvdvQ_-817rcssu0DAlfWIuW9K2NRVfPw7L5ik-vZJyGnS23qlsyJ9vpRnXvUxeg"  \
 https://api.vectara.dev:443/v2/chats \
-d @- <<END;
{
  "query": "what is time?",
  "search": {
    "corpora": [
      {
        "corpus_key": "quanta_38",
        "metadata_filter": "",
        "lexical_interpolation": 0.005,
        "custom_dimensions": {}
      }
    ],
    "offset": 0,
    "limit": 10,
    "context_configuration": {
      "sentences_before": 2,
      "sentences_after": 2,
      "start_tag": "%START_SNIPPET%",
      "end_tag": "%END_SNIPPET%"
    },
    "reranker": {
      "type": "none"
    }
  },
  "stream_response": true,
  "generation": {
    "prompt_name": "vectara-summary-ext-v1.3.0",
    "max_used_search_results": 2,
    "prompt_text": "",
    "response_language": "eng",
    "enable_factual_consistency_score": true
  },
  "chat": {
    "store": true
  }
}
END
        `}
  </VuiCode>
);

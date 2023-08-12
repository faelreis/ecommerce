import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:'skAW4NQweuGO9HfDkIh7m9iMuGkDlXwhNHAlvKyJuxweTVNQFG6kxCFg34hAnHD0Ctbyi33Ew1fkT6DgACBvoySibBfLJQ0WWgNRu99HBhksQum3WkEiFfzVFMvvNFqunk8ZRNN0m7Wnc6ogxRdqtDpmdev979VmCmSZSGS2q97JOkfmJTse'
})

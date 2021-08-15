import { Ref, ref, UnwrapRef } from "vue"

import axios from "axios"

export default function<T>(url: string): {loading: Ref<boolean>, data: Ref<UnwrapRef<T> | null>, errorMsg: Ref<string>} {
  const loading = ref(true);
  const data = ref<T|null>(null);
  const errorMsg = ref("");

  axios.get(url).then(response => {
    loading.value = false;
    data.value = response.data;
  }).catch(error => {
    loading.value = false;
    errorMsg.value = error.message;
  })

  return {
    loading,
    data,
    errorMsg
  }
}
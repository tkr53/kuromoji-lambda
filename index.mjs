import { tokenize } from "kuromojin";

export const handler = async (event, context) => {
  if (!event.text) {
    return {statusCode: "422", body: JSON.stringify({message: "text is required"})}
  } else {
    const text = event.text
    try{
      const tokens = await tokenize(text, { dicPath: "./node_modules/kuromoji/dict" });
  
      return {statusCode: "200", body: JSON.stringify({tokens: tokens})}
    } catch (e) {
      return {statusCode: "400", body: JSON.stringify({message: "tokenizer error"})}
    }
  }
}
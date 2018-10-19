/**
 * function: index
 * author  : wq
 * update  : 2018/9/19 16:39
 */

export default function (request, responseCallback) {
  import('./mock')
    .then(data => data.default[request.definedUrl](request.body))
    .then(data => responseCallback(data))
}

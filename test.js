* Serving Flask app "DayNine" (lazy loading)
* Environment: production
  WARNING: This is a development server. Do not use it in a production deployment.
  Use a production WSGI server instead.
* Debug mode: off
* Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
[2021-02-02 11:34:08,697] ERROR in app: Exception on / [GET]
Traceback (most recent call last):
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/flask/app.py", line 2447, in wsgi_app
   response = self.full_dispatch_request()
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/flask/app.py", line 1952, in full_dispatch_request
   rv = self.handle_user_exception(e)
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/flask/app.py", line 1821, in handle_user_exception
   reraise(exc_type, exc_value, tb)
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/flask/_compat.py", line 39, in reraise
   raise value
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/flask/app.py", line 1950, in full_dispatch_request
   rv = self.dispatch_request()
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/flask/app.py", line 1936, in dispatch_request
   return self.view_functions[rule.endpoint](**req.view_args)
 File "main.py", line 55, in home
   posts = order_by(popular)
 File "main.py", line 21, in order_by
   request = requests.get(order)
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/requests/api.py", line 76, in get
   return request('get', url, params=params, **kwargs)
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/requests/api.py", line 61, in request
   return session.request(method=method, url=url, **kwargs)
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/requests/sessions.py", line 528, in request
   prep = self.prepare_request(req)
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/requests/sessions.py", line 456, in prepare_request
   p.prepare(
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/requests/models.py", line 316, in prepare
   self.prepare_url(url, params)
 File "/opt/virtualenvs/python3/lib/python3.8/site-packages/requests/models.py", line 390, in prepare_url
   raise MissingSchema(error)
requests.exceptions.MissingSchema: Invalid URL '<function popular at 0x7f701cb0c280>': No schema supplied. Perhaps you meant http://<function popular at 0x7f701cb0c280>?
172.18.0.1 - - [02/Feb/2021 11:34:08] "GET / HTTP/1.1" 500 -
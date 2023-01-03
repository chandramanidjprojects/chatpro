class Node:
   def __init__(self,data):
      self.data=data
      self.left=None
      self.right=None

def predecessor(root):
   curr=root
   while curr is not None:
      if curr.left is None:
         
         print(f'predecessor for node {curr.data} is not available')
         break
      else:
         pre=curr.left
         while pre.right is not None:
            pre=pre.right 
         if pre.right is None:
            print(f'predecessor for node {curr.data} is:',pre.data)     
            break
r1=root=Node(1)
r2=root.left=Node(2)
r3=root.right=Node(3)
r4=root.left.left=Node(4)
r5=root.left.right=Node(5)

predecessor(r3)



# def isOperand(input):
#    if ((ord(input)>=65 and ord(input)<=90) or
#       (ord(input)>=97 and ord(input)<=122)):
#       return 1
#    return 0   
# def isOperator(input):
#    switch={
#       '+':1,'-':1,'*':1,'/':1,'%':1,'(':1,'^':1
#    }
#    return switch.get(input,False)

# def inPrec(input):
#    switch={'+':2,'-':2,'*':4,'/':4,'%':4,'(':0,'^':5}
#    return switch.get(input,0)

# def outPrec(input):
#    switch={'+':1,'-':1,'*':3,'/':3,'%':3,'(':100,'^':6}
#    return switch.get(input,0)

# def infixToPostfix(input):
#    i=0
#    s=[]
#    while len(input)!=i:
#       if isOperand(input[i])==1:
#         print(input[i],end='')         
#       elif isOperator(input[i])==1:
#           if len(s)==0 or outPrec(input[i])>inPrec(s[-1]):
#             s.append(input[i]) 
#           else:
#              while len(s)>0 and outPrec(input[i]) < inPrec(s[-1]):
#                print(s[-1],end='')
#                s.pop()
#              s.append(input[i])
#       elif input[i]==')':
#          while s[-1]!='(':
#             print(s[-1],end='')
#             s.pop()
#          s.pop()             
#       i+=1  
#    while len(s)>0:
#       print(s[-1],end='')
#       s.pop()
# exp='a+b*c-d^e^f' #'a+b*(c^d-e)^(f+g*h)-i'  #'a+b*c-(d/e+f*g*h)'
# infixToPostfix(exp)



#--------------------------
# class Convertion:
#    def __init__(self):
#       self.result=[]
#       self.stack=[]
#       self.top=-1
#       self.precedence={'+':1,'-':1,'*':2,'/':2,'%':2,'^':4}
#    def isOperand(self,c):
#       return c.isalpha()
#    def push(self,c):
#       self.top+=1
#       self.stack.append(c)
#    def noGreater(self,c):
#        try:
#           a=self.precedence[c]
#           b=self.precedence[self.stack[-1]]
#           return True if a<=b else False
#        except KeyError:
#           return False   
#    def infixToPostfix(self,exp):
#       for c in exp:
#          if self.isOperand(c):
#             self.result.append(c)
#          elif c=='(':
#             self.top+=1
#             self.stack.append(c)
#          elif c==')':
#             while self.top!=-1 and self.stack[-1]!='(':
#                self.top-=1
#                self.result.append(self.stack.pop())
#             self.top-=1
#             self.stack.pop()   
#          else:
#             while self.top !=-1 and self.noGreater(c):
#                self.top-=1
#                self.result.append(self.stack.pop())               
#             self.push(c)

#       while self.top!=-1:
#          self.top-=1
#          self.result.append(self.stack.pop())
# exp='a+b*(c^d-e)^(f+g*h)-i'   
# #postfix: abcd^e-fgh*+^*+i-
# obj=Convertion()
# obj.infixToPostfix(exp)


# print('-------------------------')
# print(''.join(obj.result))








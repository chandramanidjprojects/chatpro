import requests,json
def get():
  user={'username':'mani','password':'mani123'}
  res=requests.get('http://127.0.0.1:8000/get_api/api/users',data=json.dumps(user))
  print(res.json())

get()



























"""
def partition(start,end,a):
  n=len(a)
  pi=start   #start 1
  pe=a[pi] #10
  while start<end:
    while start<n and a[start]<=pe:
       start+=1
    while a[end]>pe:   
       end-=1
    if start<end:
       a[start],a[end]=a[end],a[start]
  a[pi],a[end]=a[end],a[pi]
  return end
def quicksort(start,end,a):
  if start<end:
    p=partition(start,end,a)
    
a=[10,7,8,9,1,5,14,21,2,6,11]
quicksort(0,len(a)-1,a)


def maxHeapify(a,n,i):
  largest=i
  l=2*i+1
  r=2*i+2
  if l<n and a[largest]<a[l]:
     largest=l     
  if r<n and a[largest]<a[r]:
     largest=r     
  if largest!=i:
    a[largest],a[i]=a[i],a[largest]
    maxHeapify(a,n,largest)




def heapsort(a):
  n=len(a)
  for i in range((n//2)-1,-1,-1):
     maxHeapify(a,n,i)

  for i in range(n-1,0,-1):
    a[i],a[0]=a[0],a[i]
    maxHeapify(a,i,0)

#a=[15,5,20,1,17,10,30]
a=[12,11,13,5,6,7]
heapsort(a)
"""

#[30, 20, 7, 9, 15]
#create,delete in maxheap
"""
def  maxheap(a,n):
  for i in range(n):
    while i>0:
        parent=(i-1)//2
        if a[parent]<a[i]:
          a[parent],a[i]=a[i],a[parent]
          i=parent
        else:i=0
          
a=[15,5,20,1,17,10,30]
n=len(a)
maxheap(a,n)
print(a)
for i in range(n-1,-1,-1):
   a[0],a[i]=a[i],a[0]
   maxheap(a,i)
print(a)
"""
# class Node:
#   def __init__(self,data):
#     self.left=None
#     self.data=data
#     self.right=None
# class Tree:
#   def __init__(self,node):
#     self.root=node
#     self.height=-1
#     self.queue=[]
#   def inorder_traverse(self,root):
#     if root is None:
#       return
#     self.inorder_traverse(root.left)
#     print(root.data)
#     self.inorder_traverse(root.right)
#   def getHeight(self,root):
#     if root is None:
#       return -1
#     left=self.getHeight(root.left)
#     right=self.getHeight(root.right)
#     self.height=max(left,right)+1
#     return self.height
#   def leverOrder(self,root):
#     if root is  None:
#       print('empty tree')
#       return
#     self.queue.append(root)
#     while self.queue:
#       r=self.queue.pop(0)
#       print(r.data,end=' ')
#       if r.left:
#         self.queue.append(r.left)
#       if r.right:
#         self.queue.append(r.right)

# node=Node(10)
# node.left=Node(20)
# node.left.left=Node(30) 
# node.left.right=Node(40) 
# node.right=Node(50)


#tree=Tree(node)
#tree.inorder_traverse(node)
#tree.leverOrder(node)

# class Node:
#   def __init__(self,data):
#     self.left=None
#     self.data=data
#     self.right=None
# class Tree:
#   def __init__(self):
#     self.count=0
#     self.height=0
#   def insert(self,data):
#     x=data
#     if x==-1:
#       return
#     root=Node(x)   
#     x=int(input(f'enter left  child for {root.data} -1 for exit:'))
#     root.left=self.insert(x)
#     x=int(input(f'enter right child for {root.data} -1  for exit:'))
#     root.right=self.insert(x)
#     return  root  

#   def inorder_traverse(self,root):
#     if root is None:
#       return
#     else:
#       self.inorder_traverse(root.left)
#       print(root.data)
#       self.inorder_traverse(root.right)  
#   def no_of_nodes(self,root):
#     if root is None:
#       return 0
#     self.count+=1
#     self.no_of_nodes(root.left)
#     return self.count


# t=Tree()
# r=t.insert(10)

# t.inorder_traverse(r)
# print('---------------------------')
# print(t.no_of_nodes(r))

# print('height:',t.getHeight(r))























